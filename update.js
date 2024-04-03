import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ token }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        'https://interview-plus.onrender.com/api/update-user',
        { name, password },
        { headers: { 'x-access-token': token } }
      );

      if (response.status === 200) {
        console.log('User updated successfully');
        // Handle success, such as displaying a success message or redirecting the user
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '400px', textAlign: 'center' }}>
        <h2>Update User Information</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleUpdateUser}
          style={{ width: '100%', padding: '10px', borderRadius: '3px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
