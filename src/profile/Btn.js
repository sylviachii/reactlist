import React from 'react';

const CreateBtn = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add any other functionality you want to perform on button click
  };

  return (
    <button onClick={handleClick}>
      新增品項
    </button>
  );
};

export default CreateBtn;