const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static files from the React build folder in production
if (process.env.NODE_ENV === 'production') {
  // Adjust the path if your build folder is not directly in the project root
  app.use(express.static(path.join(__dirname, '../build')));

  // Serve the main index.html file for any non-API requests
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

// MySQL Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'blog_cms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create table if it doesn't exist
// pool.query(`
//   CREATE TABLE IF NOT EXISTS blog_posts (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     content TEXT NOT NULL,
//     image VARCHAR(255) NOT NULL,
//     date VARCHAR(50) NOT NULL,
//     link VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//   )
// `, (err) => {
//   if (err) {
//     console.error('Error creating table:', err);
//   } else {
//     console.log('Table created or already exists');
//   }
// });

// Slugify utility
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')          // Replace & with 'and'
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9-]/g, '')      // Remove all non-word chars
    .replace(/--+/g, '-')            // Replace multiple - with single -
    .replace(/^-+/, '')              // Trim - from start of text
    .replace(/-+$/, '');             // Trim - from end of text
}

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM blog_posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new endpoint for fetching a single post
app.get('/api/posts/:id', async (req, res) => {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/posts', upload.single('image'), async (req, res) => {
  try {
    console.log('Received file:', req.file);
    console.log('Received body:', req.body);

    const imageUrl = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : req.body.image;
    const slug = slugify(req.body.title);

    const [result] = await pool.promise().query(
      'INSERT INTO blog_posts (title, content, image, date, link, slug) VALUES (?, ?, ?, ?, ?, ?)',
      [req.body.title, req.body.content, imageUrl, req.body.date, req.body.link, slug]
    );

    const [newPost] = await pool.promise().query('SELECT * FROM blog_posts WHERE id = ?', [result.insertId]);
    console.log('Saved post:', newPost[0]);
    res.status(201).json(newPost[0]);
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/posts/:id', upload.single('image'), async (req, res) => {
  try {
    console.log('Update - Received file:', req.file);
    console.log('Update - Received body:', req.body);

    const imageUrl = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : req.body.image;
    const slug = slugify(req.body.title);

    await pool.promise().query(
      'UPDATE blog_posts SET title = ?, content = ?, image = ?, date = ?, link = ?, slug = ? WHERE id = ?',
      [req.body.title, req.body.content, imageUrl, req.body.date, req.body.link, slug, req.params.id]
    );

    const [updatedPost] = await pool.promise().query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    console.log('Updated post:', updatedPost[0]);
    res.json(updatedPost[0]);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const [post] = await pool.promise().query('SELECT image FROM blog_posts WHERE id = ?', [req.params.id]);

    if (post[0] && post[0].image) {
      const imagePath = path.join(__dirname, 'uploads', path.basename(post[0].image));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await pool.promise().query('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to fetch a post by slug
app.get('/api/posts/slug/:slug', async (req, res) => {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM blog_posts WHERE slug = ?', [req.params.slug]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
