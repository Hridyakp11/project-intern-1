import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = ({ token }) => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`https://interview-plus.onrender.com/api/delete-user/${userId}`, {
        headers: {
          'x-access-token': token
        }
      });

      if (response.status === 200) {
        console.log('User deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '400px', textAlign: 'center' }}>
        <h2>Delete User</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
        />
        <button
          onClick={handleDeleteUser}
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
