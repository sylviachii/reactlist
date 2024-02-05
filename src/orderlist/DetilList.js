import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './DetilId';
import Orderlist from './Detilorder';
import Addresslist from './Addresslist';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';
const Detils = () => {
  const idValue = 143; // 替换为你实际的 id 值
  const { id } = useParams();
  return (
    <>
      <div>
      <Lists id={id} />
        <Lists id={idValue} />
        <Lists id={147}/>
        <Lists />
        <Orderlist id={147} />
        <Addresslist id={147} />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<Detils />);

export default Detils;
