import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TopBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick1 = () => {
    navigate('/'); // Navigate to the home page on title button click
  };

  const handleButtonClick2 = () => {
    navigate('/past-reviews'); // Navigate to Past Reviews page on button click
  };

  return (
    <div style={styles.topBar}>
      {/* Title button that navigates to the home page */}
      <button style={styles.title} onClick={handleButtonClick1}>
        The Branson Political Review
      </button>
      {/* Button that navigates to the Past Reviews page */}
      <button style={styles.button} onClick={handleButtonClick2}>
        Past Reviews
      </button>
    </div>
  );
};

const styles = {
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
    width: 'calc(100% - 100px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '0 50px',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: '26px',
    fontWeight: '900',
    margin: 0,
    background: 'none', // Remove default button background
    border: 'none', // Remove default button border
    cursor: 'pointer', // Show pointer cursor
    color: '#000000', // Set the text color
  },
  button: {
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    padding: '5px 15px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    color: '#000000',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default TopBar;
