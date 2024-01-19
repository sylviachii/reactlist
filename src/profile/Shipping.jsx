import React from 'react';
import Select from './Select';
import Btn from './Btn';

function Shipping(props) {
  return (
    <>
      <div className="Shipping">
      <div className='spacebetween'>
          <div className="div-2">處理狀態</div>
          <div className=" ">
            <Select />
          </div>
        </div>
        <div className="div-5" />
        <div className="create">
          <div className="listname">
            <div className=" ">配送</div>
            <div className=" ">運費</div>
            <div className=" ">地址</div>
            <div className=" ">聯絡電話</div>
            
          </div>
          <div className="listinput">
            <div className="">
            <Select />
            </div>
            <input></input>
            <input></input>
            <input></input>
            
          </div>
        </div>
        <div className='spacebetween'>
        <div className="">備註</div>
        <textarea></textarea>
        </div>
        <span><Btn/></span>
      </div>
     
    </>
  );
}
export default Shipping;

