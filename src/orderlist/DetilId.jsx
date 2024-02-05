import React, { useState, useEffect } from 'react';

const Lists = ({ id }) => {
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
              <div className="">訂單{id}
              </div>
              <div className="">待處理</div>
            </div>
            <div className="line"></div>
            <div className="div-6">
              <div className="div-7">購買人</div>
              <div className="div-7">配送方式</div>
            </div>
            <div className="div-6">
              <div className="">{data[0].client}</div>
              <div className=""> {data[0].delivery}</div>
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

export default Lists;
