const API_URL = 'https://api.example.com/blogs';

export const fetchBlogs = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

export const fetchBlogById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

export const createBlog = async (blogData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog');
  }
  return response.json();
};

export const updateBlog = async (id, blogData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) {
    throw new Error('Failed to update blog');
  }
  return response.json();
};

export const deleteBlog = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete blog');
  }
  return response.json();
};
