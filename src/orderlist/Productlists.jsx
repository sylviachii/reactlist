import React from 'react';

const ProductList = ({ row }) => {
  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
        if (!row[`name${i}`]) {
          // If `name${i}` is empty, skip this iteration
          return null;
        }

        return (
          <div key={i} style={{ marginBottom: '20px' }}>
            <div className="spacebetween">
              <div>
                <img width="64" src={row[`imgsrc${i}`]} alt={`Product ${i}`} />
              </div>
              <div className="prodectname">
                {row[`name${i}`]}
                <div className="ordercount">
                  <div className="ordercountlist">${row[`price${i}`]}</div>
                  <div className="ordercountlist">數量：{row[`qu${i}`]}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
