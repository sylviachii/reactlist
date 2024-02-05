import React, { useState, useEffect } from 'react';

const DetilSend = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/data2/${id}`);
        console.log('Response:', response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const parsedData = await response.json();
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const shouldRenderList =
    data &&
    data.length > 0 &&
    Array.from({ length: 9 }, (_, index) => index + 1).some((i) => {
      const imgSrcKey = `imgsrc${i}`;
      const nameKey = `name${i}`;
      return data[0][imgSrcKey] && data[0][nameKey];
    });

  return (
    <div>
      {shouldRenderList ? (
        <div className="list">
          {Array.from({ length: 9 }, (_, index) => index + 1).map((i) => {
            const imgSrcKey = `imgsrc${i}`;
            const nameKey = `name${i}`;
            const priceKey = `price${i}`;
            const quKey = `qu${i}`;

            const shouldRender = data[0] && data[0][imgSrcKey] && data[0][nameKey];

            return shouldRender ? (
              <div key={i} className="spacebetween">
                <div>
                  <img src={data[0][imgSrcKey]} width="84" alt={`Product ${i}`} />
                </div>
                <div className="prodectname">
                  <>
                    {data[0][nameKey]}
                    <div className="ordercount">
                      <div className='ordercountlist'>${data[0][priceKey]}</div>
                      <div className='ordercountlist'>數量：{data[0][quKey]}</div>
                    </div>
                  </>
                </div>
              </div>
            ) : null;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default DetilSend;
