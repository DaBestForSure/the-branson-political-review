import React, { useState } from 'react';
// fake comment
const HoverImage = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <img src={imageSrc} alt="Picture of BPR" style={styles.image} />
      <div style={{ ...styles.overlay, opacity: isHovered ? 1 : 0 }}>
        <div style={styles.gradientDiv}></div>
        <p style={styles.title}>{title}</p>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};
 
const styles = {
  container: {
    position: 'relative',
    width: '262.5px',
    height: '372px',
    overflow: 'hidden',
    bordern: 'none',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flexDirection: 'column', // Stack text vertically
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',
    color: 'white',
    fontSize: '16px',
    opacity: 0, // Initially hidden
    transition: 'opacity 0.3s ease', // Smooth transition
    padding: '20px', // Add padding around the overlay
    border: 'none',
    gap: '5px',
  },
  title: {
    margin: '0px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '12px',
    margin: 0,
  },
  gradientDiv: {
    width: '20px',
    height: '1.2px',
    background: 'rgb(255, 255, 255)',
  },
};

export default HoverImage;
