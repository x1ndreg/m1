const fetchPosts = async () => {
  try {
    const token = localStorage.getItem('token');
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
