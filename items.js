import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    
    setItems(prevItems => [...prevItems, { id: prevItems.length + 1, name: newItem }]);
    setNewItem('');
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://interview-plus.onrender.com/api/items');

        if (response.status === 200) {
          setItems(response.data); 
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        setError('Failed to fetch items. Please try again.');
      }
    };

    fetchItems();
  }, []); 

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Items</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            {item.name}
          </li>
        ))}
      </ul>

      {}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <input 
          type="text" 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          placeholder="Enter item name" 
          style={{ marginRight: '10px' }} 
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default Items;
