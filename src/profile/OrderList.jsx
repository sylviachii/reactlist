import React, { useState, useEffect } from 'react';


const OrderList  = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // 根據實際的後端伺服器域名和端點進行調整
        fetch('http://localhost:3001/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return ( 
        <div className='orderlist'>
       

        {data.map(item => (
             <div className='list'>
        <div className="spacebetween"  key={item.idorder}>
      <div>
        <img src={item.img} alt="Product" width="86"  />
      </div>

      <div className="prodectname" >
       {item.titlename}
      
        <div className="ordercount">
          <div className='ordercountlist'>${item.price}</div>
          <div className='ordercountlist'>數量：{item.quantity}</div>
        </div>
      
      </div>
    
    </div>
    </div> 
      ))}

        </div>
    );
};



export default OrderList;
