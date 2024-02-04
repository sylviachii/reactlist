import React, { useState, useEffect } from 'react';
import List from './ProdoctList';
import OrderList from './OrderList';
const Order = () => {
    // Using the ProductItem component
    return (
        <>
                <div>
            <h1>MySQL Data in React</h1>
        </div>

      <div>
        <OrderList/>

      </div>
      </>
    );
  };


export default Order;
