import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

const BlogPost = () => {
  const { id } = useParams();
  const { pages: { blog: blogContent } } = useAppContent();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] flex items-center justify-center">
        <div className="text-white text-2xl">Post not found</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {blogContent.title}
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8">
                <motion.h2
                  className="text-4xl font-bold text-[#010170] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {post.title}
                </motion.h2>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="bg-[#010170] text-white text-sm font-semibold py-1 px-3 rounded">
                    {post.date}
                  </span>
                </motion.div>
                <motion.div
                  className="relative mb-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
                <motion.div
                  className="text-[#010170] text-lg leading-relaxed text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {post.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default BlogPost;
