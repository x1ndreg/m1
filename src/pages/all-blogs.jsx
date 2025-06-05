import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";
import { Link, useParams, useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const { pages: { blog: blogContent } } = useAppContent();
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (blogPosts.length > 0) {
      if (slug) {
        fetchFeaturedBySlug(slug);
      } else {
        setFeaturedPost(blogPosts[0]);
      }
    }
    // eslint-disable-next-line
  }, [slug, blogPosts]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/posts`);
      const data = await response.json();
      setBlogPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const fetchFeaturedBySlug = async (slug) => {
    try {
      const response = await fetch(`${API_URL}/api/posts/slug/${slug}`);
      if (!response.ok) {
        setFeaturedPost(null);
        return;
      }
      const data = await response.json();
      setFeaturedPost(data);
    } catch (error) {
      setFeaturedPost(null);
    }
  };

  const handleRecentClick = (post) => {
    navigate(`/all-blogs/${post.slug}`);
    setFeaturedPost(post);
  };

  if (loading || !blogPosts.length || !featuredPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  // All blogs except featured
  const allBlogs = blogPosts.filter(post => post.id !== featuredPost.id);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden pb-40">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Blogs
        </motion.h1>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: `url("${blogContent.backgroundImages.texture}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />
        <div className="container mx-auto px-4 pt-50 pb-60 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div
                className="w-full lg:w-2/3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="rounded-lg overflow-hidden"
                >
                  {/* Content */}
                  <div className="p-6">
                    <motion.h2
                      className="text-4xl font-bold text-[#010170] mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {featuredPost.title}
                    </motion.h2>
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="bg-[#010170] text-white text-xs font-semibold py-1 px-3 rounded">
                        {featuredPost.date}
                      </span>
                    </motion.div>
                    <motion.div
                      className="relative mb-4"
                    >
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </motion.div>
                    <motion.p
                      className="text-[#010170] mb-4 text-justify break-words whitespace-pre-line"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {featuredPost.content}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-[#010170] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  All Blogs
                </motion.h3>
                <div className="space-y-4">
                  {allBlogs.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="rounded-lg overflow-hidden shadow-lg relative text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(1, 1, 112, 0.2)"
                      }}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,20,100,0)] via-[rgba(60,40,150,0.3)] to-[#31328a]"></div>
                        <div className="absolute top-2 left-2 bg-[#010170] text-white text-xs font-semibold py-1 px-2 rounded">
                          {post.date}
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 px-3 text-white">
                          <h4 className="text-sm font-bold mb-1 line-clamp-2 drop-shadow-md">
                            {post.title}
                          </h4>
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <button
                            onClick={() => handleRecentClick(post)}
                            className="inline-flex items-center justify-center bg-[#010170] text-white text-xs font-medium py-1 px-2 rounded-md hover:bg-[#0101a0] transition-colors"
                          >
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default AllBlogs;
