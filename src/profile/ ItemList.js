// ItemList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ItemLists = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={'/items/${item.id}'}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemLists;
