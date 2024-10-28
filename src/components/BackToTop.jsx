import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) { // Show button after scrolling 1000px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000; // duration of scroll in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for acceleration and deceleration
      const easing = (t) => t * (2 - t); // Simple ease-in-out

      // Calculate the current scroll position
      const scrollY = start - (start * easing(progress));

      window.scrollTo(0, scrollY);

      if (progress < 1) {
        requestAnimationFrame(animation); // Keep animating
      }
    };

    requestAnimationFrame(animation); // Start the animation
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.button}>
        Back to Top
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }
};

export default BackToTopButton;
