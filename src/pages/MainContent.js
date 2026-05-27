import React from 'react';
import PDFLoader from '../pdf_viewer.js'; // Ensure to import your Sample component
import BackToTop from '../components/BackToTop.jsx'; // Ensure to import your BackToTopButton component

const MainContent = () => {
  return (
    <div style={{ padding: '20px', marginTop: '10px'}}>
      <PDFLoader file='/Spring2026.pdf'/>
      <BackToTop />
    </div>
  );
};

export default MainContent;
