import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    date: '',
    link: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();
  const { logout } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/api/posts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log('Fetched posts:', data);
      if (response.ok) {
        setPosts(data);
      } else {
        console.error('Error fetching posts:', data.message);
        setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('link', formData.link);

      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      } else if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const url = editingId
        ? `${API_URL}/api/posts/${editingId}`
        : `${API_URL}/api/posts`;
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend,
      });

      if (response.ok) {
        const savedPost = await response.json();
        console.log('Saved post:', savedPost);
        fetchPosts();
        setFormData({
          title: '',
          content: '',
          image: '',
          date: '',
          link: ''
        });
        setSelectedFile(null);
        setPreviewUrl('');
        setEditingId(null);
        navigate('/admin/blog');
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      content: post.content,
      image: post.image,
      date: post.date,
      link: post.link
    });
    setPreviewUrl(post.image);
    setSelectedFile(null);
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${API_URL}/api/posts/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          fetchPosts();
        } else {
          const errorData = await response.json();
          console.error('Server error:', errorData);
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] p-8 font-sans">
      <div className="h-28"></div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog Admin
          </motion.h1>
          <motion.button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#010170] mb-8">
              {editingId ? 'Edit Post' : 'Create New Post'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#010170] focus:ring-[#010170] p-3 outline-none text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#010170] focus:ring-[#010170] p-3 outline-none text-gray-800"
                  rows="8"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-[#010170] hover:file:bg-blue-200 cursor-pointer"
                />
                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="h-48 w-full object-cover rounded-md shadow-sm"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#010170] focus:ring-[#010170] p-3 outline-none text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#010170] focus:ring-[#010170] p-3 outline-none text-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#010170] text-white px-4 py-3 rounded-md hover:bg-[#0101a0] transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-[#010170] focus:ring-offset-2"
              >
                {editingId ? 'Update Post' : 'Create Post'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      title: '',
                      content: '',
                      image: '',
                      date: '',
                      link: ''
                    });
                    setSelectedFile(null);
                    setPreviewUrl('');
                  }}
                  className="w-full mt-2 bg-gray-300 text-gray-800 px-4 py-3 rounded-md hover:bg-gray-400 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#010170] mb-6">Manage Posts</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border border-gray-200 rounded-md p-4 flex justify-between items-center bg-gray-50 shadow-sm"
                >
                  <div className="flex items-center space-x-4 flex-grow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-16 w-16 object-cover rounded-md border border-gray-300"
                      onError={(e) => {
                        console.error('Image failed to load:', post.image);
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                      }}
                      onLoad={() => console.log('Image loaded successfully:', post.image)}
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
