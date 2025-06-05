import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on mount and when URL changes
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      const tokenExpiry = localStorage.getItem('tokenExpiry');
      const isTokenValid = token && tokenExpiry && new Date().getTime() < parseInt(tokenExpiry);

      if (!isTokenValid) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('tokenExpiry');
        navigate('/admin/login', { replace: true });
      }
    };

    checkAuth();
    // Add event listener for URL changes
    window.addEventListener('popstate', checkAuth);
    return () => window.removeEventListener('popstate', checkAuth);
  }, [navigate]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  // Check for token and its expiry
  const token = localStorage.getItem('adminToken');
  const tokenExpiry = localStorage.getItem('tokenExpiry');
  const isTokenValid = token && tokenExpiry && new Date().getTime() < parseInt(tokenExpiry);

  // If not authenticated or token is invalid, redirect to login
  if (!isAuthenticated || !isTokenValid) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
