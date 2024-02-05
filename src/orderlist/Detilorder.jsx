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
                <div>
                    <div className="list">
                    <div className="spacebetween">
                        <div>
                            <img src={data[0].imgsrc} width="84" alt="Product" />
                        </div>
                        <div className="prodectname">
                        {data[0].titlename}
                            <div className="ordercount">
                                <div className='ordercountlist'>${data[0].price}</div>
                                <div className='ordercountlist'>數量：{data[0].quantity}</div>
                            </div>
                        </div>
                    </div>
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
