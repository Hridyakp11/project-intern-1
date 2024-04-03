import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ token }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log('Headers:', {
          'x-access-token': token
        });
        const response = await axios.get('https://interview-plus.onrender.com/api/protectedroute', {
          headers: {
            'x-access-token': token
          }
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching protected data:', error);
        setError('Failed to fetch protected data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>Protected Route</h2>
          <p>Data: {JSON.stringify(data)}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProtectedRoute;
