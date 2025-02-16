import React from 'react';
import Scndmenu from './Scndmenu';

// Define a component named DatePicker within the object
const Mainlist = {
  DatePicker: function DatePicker(props) {
    return (
      <>
      
      <div className="list">
        <div className="spacebetween">
        <h4>訂單: #{props.Orderid}</h4>
          <div className="spacebetweens">
           
            <div className="div-2">商品: ({props.productTotal})</div>
          </div>
        </div>
        <div className="line" />
        <div className="div-6">
          <span className="span-3">
            <div className="listtitle">購買人:</div>
            <div className="listtitle">配送:</div>
          </span>
          <span className="span-4">
            <div className="listright"> {props.customerName}</div>
            <div className="listright">{props.delivery}</div>
          </span>
        </div>
      </div>
      </>
    );
  },
};

// Create a functional component named DatePicker
function MainDatePicker({ Orderid, date, otherInfo, productTotal, customerName, delivery }) {
  // Render the DatePicker component with multiple props
  return <Mainlist.DatePicker
    color='blue'
    Orderid={Orderid}
    date={date}
    productTotal={productTotal}
    customerName={customerName}
    otherInfo={otherInfo}
    delivery={delivery}

  />;

}

// Usage of the DatePicker component in a parent component or file
function Home() {
  return (
    <div className='test'>
      <h1>Home Page</h1>
      <Scndmenu />
      <MainDatePicker  Orderid="123" productTotal="5" customerName="張張張" delivery="全家超商"/>
      <MainDatePicker  Orderid="124" productTotal="15" customerName="張張張" delivery="全家超商"/>
      <MainDatePicker  Orderid="231" productTotal="95" customerName="哩哩哩" delivery="小七超商"/>
    </div>
  );
}

export default Home;


