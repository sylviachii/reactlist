import React from 'react';
import { useParams } from 'react-router-dom';
import Lists from './orderlist/DetilId';

const ListsContainer = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  return <Lists id={id} />;
};

export default ListsContainer;