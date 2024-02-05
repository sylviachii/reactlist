import React, { useState } from 'react';
import Edit from './Edit';
import Shipping from './Shipping';


const AddForm = () => {
  // 用于存储输入字段值的状态
  const [inputValues, setInputValues] = useState({
    buyer: '',
    productName: '',
    productImage: '',
    amount: '',
    quantity: '',
    shipping: '',
    shippingCost: '',
    phone: '',
    address: '',
    notes: '',
  });

  // 输入变化的事件处理函数
  const handleInputChange = (fieldName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  return (
    <div className='test'>
      {/* 动态生成10个不同类型的输入框 */}
      {Object.keys(inputValues).map((fieldName) => (
        <div key={fieldName}>
          <label>{fieldName}：</label>
          <input
            type="text"
            value={inputValues[fieldName]}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
            placeholder={`输入${fieldName}`}
          />
        </div>
      ))}

      {/* 显示当前输入字段的值 
      <div>
        <p>当前值：</p>
        {Object.keys(inputValues).map((fieldName) => (
          <p key={fieldName}>
            {fieldName}：{inputValues[fieldName]}
          </p>
        ))}
      </div>*/}

      <Edit/>
      
    </div>
  );
};

export default AddForm;