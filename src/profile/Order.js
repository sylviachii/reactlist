import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';
import { createRoot } from 'react-dom/client';

const Order  = () => {


  return (
    <>
      <div>
        <h1>MySQL Data in React</h1>
      </div>
      <div>
        <OrderList />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<Order />);

export default Order;
