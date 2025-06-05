const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, please try again after 15 minutes'
});

// Apply rate limiting to login route
app.use('/api/auth/login', loginLimiter);

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

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

// Create admin users table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, async (err) => {
  if (err) {
    console.error('Error creating admin_users table:', err);
  } else {
    // Check if admin user exists, if not create one
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    try {
      const [existingAdmin] = await pool.promise().query(
        'SELECT * FROM admin_users WHERE username = ?',
        [adminUsername]
      );

      if (existingAdmin.length === 0) {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        await pool.promise().query(
          'INSERT INTO admin_users (username, password) VALUES (?, ?)',
          [adminUsername, hashedPassword]
        );
        console.log('Default admin user created');
      }
    } catch (error) {
      console.error('Error setting up admin user:', error);
    }
  }
});

// Create blog_posts table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255),
    slug VARCHAR(255) NOT NULL UNIQUE,
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating blog_posts table:', err);
  } else {
    console.log('blog_posts table ready');
  }
});

// Authentication Routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get user from database
    const [users] = await pool.promise().query(
      'SELECT * FROM admin_users WHERE username = ?',
      [username]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];

    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protected Routes - Only protect non-GET routes for posts
app.get('/api/posts', async (req, res) => {
  try {
    const [posts] = await pool.promise().query('SELECT * FROM blog_posts ORDER BY created_at DESC');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
});

app.get('/api/posts/slug/:slug', async (req, res) => {
  try {
    const [posts] = await pool.promise().query('SELECT * FROM blog_posts WHERE slug = ?', [req.params.slug]);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(posts[0]);
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
});

// Protect all other post routes
app.use('/api/posts', (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    authenticateToken(req, res, next);
  }
});

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
