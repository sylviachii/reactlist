import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';

// 商品信息组件
const MenuItem = () => {
  return (
    <>
      <div className="Scndmenu">
        <div className="nav"><Link to="/home">待處理</Link></div>
        <div className="nav"><Link to="/home">全部</Link></div>
        <div className="nav"><Link to="/">已完成</Link></div>
      </div>

    </>
  );
};


const Scndmenu = () => {

  return (
    <div>
      <MenuItem />

    </div>
  );
};


export default Scndmenu;