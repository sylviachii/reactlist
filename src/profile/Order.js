import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';
import Lists from '../orderlist/DetilId';
import { createRoot } from 'react-dom/client';

const Order  = () => {
  const idValue = 1; // 替换为你实际的 id 值
  const title = 'Your Title';

  return (
    <>
      <div>
        <h1>MySQL Data in React</h1>
      </div>

      <div>
        <h1>React API 数据获取示例</h1>
        <Lists id={idValue} />
        <Lists id={2} title={title}/>
        <Lists />
      <h2>1: </h2>
        <OrderList />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<Order />);

export default Order;
