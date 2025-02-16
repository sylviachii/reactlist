import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="spacebetween">
      <div>
        <img src="http://makakona.com/wp-content/uploads/2023/12/12-5_0003_405252263_338185985605452_178825488757428720_n-150x150.jpg" alt="Product" />
      </div>
      <div className="prodectname">
        {props.productName}
        <div className="ordercount">
          <div className='ordercountlist'>${props.price}</div>
          <div className='ordercountlist'>數量：{props.priceAcount}</div>
        </div>
      </div>
    </div>
  );
};

// Create a functional component named DatePicker
function Productlist({ customerName, productName, price, priceAcount }) {
  // Render the DatePicker component with multiple props
  return <ProductItem.DatePicker
    productName={productName}
    customerName={customerName}
    price={price}
    priceAcount={priceAcount}

  />;

}

// List component
const List = () => {
  // Using the ProductItem component
  return (
    <div>
      <ProductItem delivery="1" price="380" priceAcount="1" 櫻神宮 productName="12月限定御朱印櫻神宮
        櫻神宮 12月限定御朱印" />
      <ProductItem delivery="1" price="380" priceAcount="1" 櫻神宮 productName="12月限定御朱印櫻神宮
        櫻神宮 12月限定御朱印" />
    </div>
  );
};

// Export the List component
export default List;