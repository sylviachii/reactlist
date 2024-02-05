import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './DetilId';
import Orderlist from './Detilorder';
import Addresslist from './Addresslist';
import DetilSend from './DetilSend';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';
const Detils = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <Lists id={id} />
        <Orderlist id={id} />
        <Addresslist id={id} />
        <DetilSend id={id} />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<Detils />);

export default Detils;
