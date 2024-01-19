import React, { useState } from 'react';

const Dropdown = () => {
  // State 用于跟踪当前选中的值
  const [selectedValue, setSelectedValue] = useState('');

  // 选项的数组
  const options = ['待處理', '已完成'];

  // 处理下拉选项变化的函数
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>

      {/* 下拉选项 */}
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* 显示选中的值 
      <p>Selected Value: {selectedValue}</p>*/}
    </div>
  );
};

export default Dropdown;