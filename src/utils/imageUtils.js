/**
 * Get the correct image path for both development and production
 * @param {string} path - The image path
 * @returns {string} - The corrected image path
 */
export const getImagePath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Remove /src prefix if present
  const finalPath = cleanPath.startsWith('src/') ? cleanPath.substring(4) : cleanPath;
  
  // Add BASE_URL prefix
  return `${import.meta.env.BASE_URL}${finalPath}`;
};