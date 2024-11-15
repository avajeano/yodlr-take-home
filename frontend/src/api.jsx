const BASE_URL = "http://localhost:3000";

export const Api = {
    // Get all users
    getAllUsers: async () => {
      const response = await fetch(`${BASE_URL}/users`);
      return response.json();
    },
  
    // Create new user
    createUser: async (userData) => {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response.json();
    },
  
    // Get user by ID
    getUser: async (id) => {
      const response = await fetch(`${BASE_URL}/users/${id}`);
      return response.json();
    },
  
    // Update user
    updateUser: async (id, userData) => {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userData, id }),
      });
      return response.json();
    },
  
    // Delete user
    deleteUser: async (id) => {
      await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
      });
    },
  };

export default Api;