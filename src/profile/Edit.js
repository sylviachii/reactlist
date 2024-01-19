import React from 'react';
import Btn from './Btn';
import Shipping from './Shipping';

function Edit(props) {
  return (
    <>
      <div className='test'>
        <div className="list">
          <div className="spacebetween">
            <div className="div-2">購買人</div>
            <input></input>
          </div>
          <div className="line" />
          <div className="div-4" />
          <div className="div-5" />
          <div className="create">
            <div className="listname">
              <div className="">品名</div>
              <div className="">產品圖</div>
              <div className="">數量</div>
              <div className="">價格</div>
            </div>
            <div className="listinput">
              <input></input>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </div>
          <div><Btn /></div>
        </div>
        <Shipping />
      </div>
      
    </>
  );
}
export default Edit;