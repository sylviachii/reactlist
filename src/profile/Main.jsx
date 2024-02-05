import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Mainlists = (props) => {

        const [data, setData] = useState([]);
        useEffect(() => {
            // 根據實際的後端伺服器域名和端點進行調整
            fetch('http://localhost:3001/api/data3')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        }, []);

      return (
        <>
              {data.map(items => (

        <div className="list">
          <div className="spacebetween">
          <h4><Link to={`/listscontainer/${items.id}`}>訂單: #{items.id}</Link></h4>
            <div className="spacebetweens">
              <div className="div-2">商品: ({props.productTotal})</div>
            </div>
          </div>
          <div class="line"></div>
          <div className="div-6">
            <span className="span-3">
              <div className="listtitle">購買人:</div>
              <div className="listtitle">配送:</div>
            </span>
            <span className="span-4">
              <div className="listright"> {items.client}</div>
              <div className="listright">{items.delivery}</div>
            </span>
          </div>
        </div>
              ))}  
        </>
      );
    };


  export default Mainlists;