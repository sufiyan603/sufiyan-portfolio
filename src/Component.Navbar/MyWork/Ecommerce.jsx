import React from 'react'

const Ecommerce = () => {
  alert("No Content On This Ecommerce Page");

  const handleGoBack = () => {
    window.history.back(); // Navigates back to the previous page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      {/* <h1>To-Do List App Is Under development</h1> */}
      <button
        onClick={handleGoBack}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginTop:"35px",
          color: 'white',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Ecommerce
