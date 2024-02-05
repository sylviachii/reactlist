import React from 'react';
import Scndmenu from './Scndmenu';
import Mainlists from './Main';


function Home() {
  return (
    <div className='orderlist'>
      <h1>Home Page</h1>
      <Scndmenu />
      <Mainlists />
    </div>
  );
}

export default Home;


