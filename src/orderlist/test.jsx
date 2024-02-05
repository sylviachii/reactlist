import React, { useState, useEffect } from 'react';
import ProductList from './Productlists';
import axios from 'axios';

const YourParentComponent = () => {
  const [row, setRow] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    // Assuming your JSON data is served at this endpoint
    const apiUrl = `http://localhost:3001/api/data2/${id}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // Axios directly returns the data, no need to call response.json()
        setRow(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);// The empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Your Parent Component</h1>
      {row && <ProductList row={row} />}
    </div>
  );
};

export default YourParentComponent;
