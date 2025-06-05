// backfillSlugs.js
const mysql = require('mysql2/promise');
const slugify = require('slugify');
require('dotenv').config();

async function main() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'blog_cms',
  });

  // Fetch all posts
  const [posts] = await pool.query('SELECT id, title FROM blog_posts');
  const usedSlugs = new Set();

  for (const post of posts) {
    let baseSlug = slugify(post.title, {
      lower: true,
      strict: true, // removes special chars
      locale: 'en'
    });

    let slug = baseSlug;
    let counter = 2;

    // Ensure uniqueness
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter++}`;
    }
    usedSlugs.add(slug);

    // Update the post if slug is missing or different
    await pool.query('UPDATE blog_posts SET slug = ? WHERE id = ?', [slug, post.id]);
    console.log(`Updated post ${post.id} with slug: ${slug}`);
  }

  await pool.end();
  console.log('Slug backfill complete!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
