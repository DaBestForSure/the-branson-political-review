import React from 'react';

const Headers = ({ text }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{text}</h1>
      <div style={styles.gradientDiv}></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content
    padding: '0px 50px', // Padding on sides and top
    justifyContent: 'left'
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '48px',
    margin: '0 0 10px 0', // Set bottom margin for gap
  },
  gradientDiv: {
    width: '150px',
    height: '1px',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
    // boxSizing: 'content-box', // Ensure padding doesn't affect the size
  },
};

export default Headers;
