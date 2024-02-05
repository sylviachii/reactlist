import React, { useState, useEffect } from 'react';

const OrderLists = ({ id }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/data2/${id}`);
                console.log('Response:', response);

                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${response.status}');
                }

                const parsedData = await response.json();
                console.log('Parsed Data:', parsedData);
                setData(parsedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {data && data.length > 0 ? (
           <div className="list">
           <h3>配送資訊</h3>
           <div className="line" />
           <div className="spacebetween">
           <div className="listtitle">購買人</div>
               <div className="listleft">{data[0].client}</div>
           </div>
           <div className="spacebetween">
           <div className="listtitle">運費</div>
               <div className="listleft">{data[0].discount}</div>
           </div>
           <div className="spacebetween">
           <div className="listtitle">配送</div>
               <div className="listleft">{data[0].delivery}</div>
           </div>
           <div className="spacebetween">
           <div className="listtitle">聯絡電話</div>
               <div className="listleft">{data[0].tel}</div>
           </div>
           <div className="spacebetween">
           <div className="listtitle">地址</div>
               <div className="address">{data[0].address}</div>
           </div>
           <div className="spacebetween">
           <div className="listtitle">備註</div>
               <div className="note">{data[0].note}</div>
           </div>

       </div>
            ) : (
                <p>Loading...</p>
            )}
            {console.log('Data in render:', data)}
        </div>
    );
};

export default OrderLists;
