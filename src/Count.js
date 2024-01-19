import React from 'react';

// Define a component named DatePicker within the MyComponents object
const MyComponents = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    },
  };
  
  // Create a functional component named BlueDatePicker
  function BlueDatePicker() {
    // Render the DatePicker component with a color prop set to 'blue'
    return <MyComponents.DatePicker color='blue' />;
  }

// Usage of the BlueDatePicker component in a parent component or file
function Count() {
    return (
      <div className='test'>
        <h1>Welcome to My App</h1>
        <BlueDatePicker />
      </div>
    );
  }
  
  export default Count;

  
  