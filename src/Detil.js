import React from 'react';
import { useParams } from 'react-router-dom';
import Lists from './orderlist/DetilId';
import Orderlist from './orderlist/Detilorder';
import Addresslist from './orderlist/Addresslist';
import DetilSend from './orderlist/DetilSend';

const Detil = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div className='orderlist'>
      <h1>Detil</h1>
      <Lists id={id} />
      <Orderlist id={id} />
      <DetilSend id={id} />
      <Addresslist id={id} />
    </div>
  )
};

export default Detil;