import React, { useState } from 'react';
import HoverImage from '../components/HoverImage.js'; // Make sure to import your HoverImage component
import Headers from '../components/Headers.js';
import Popup from '../components/Popup.jsx';
import PDFLoader from '../pdf_viewer.js';

const PastReviews = () => {
    // Sample data for HoverImages
    const hoverImagesData2024 = [
        { imageSrc: '/FrontPages/Spring2025.png', title: 'Democratic Dissonance', description: 'Friday, June 6th, 2025', path: '/Spring2025.pdf' },
        { imageSrc: '/FrontPages/Fall2024.png', title: 'The Gray Area', description: 'Monday, November 4th, 2024', path: '/Greyarea - V 1.pdf' },
        { imageSrc: '/FrontPages/Spring2024.png', title: 'Inaugural Edition', description: 'Friday, May 31st, 2024', path: '/Spring2024.pdf' },
        
        // Add more images as needed
    ];
    const hoverImagesData2025 = [
        { imageSrc: '/FrontPages/Spring2025.png', title: 'Democratic Dissonance', description: 'Friday, June 6th, 2025', path: '/Spring2025.pdf' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [pathToPDF, setPath] = useState('');

    const togglePopup = (path) => {
        setIsOpen(!isOpen);
        setPath(path);
    };

    return (
        <div style={styles.page}>
            <div styles={styles.yearDivs}>
                <Headers text="2025" />
                <div style={styles.hoverImagesContainer}>
                    {hoverImagesData2025.map((imgData, index) => (
                        <button key={index} style={styles.imageWrapper} onClick={() => togglePopup(imgData.path)}>
                            <HoverImage
                                imageSrc={imgData.imageSrc}
                                title={imgData.title}
                                description={imgData.description}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <Headers text="2024" />
            <div style={styles.hoverImagesContainer}>
                {hoverImagesData2024.map((imgData, index) => (
                    <button key={index} style={styles.imageWrapper} onClick={() => togglePopup(imgData.path)}>
                        <HoverImage
                            imageSrc={imgData.imageSrc}
                            title={imgData.title}
                            description={imgData.description}
                        />
                    </button>
                ))}
            </div>

            <Popup isOpen={isOpen} onClose={togglePopup}>
                <PDFLoader file={pathToPDF} />
            </Popup>
        </div>
    );
};

const styles = {
    page: {
        padding: '30px 55px 0 55px',
        boxSizing: 'border-box',
    },
    hoverImagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        margin: '30px 30px',
        padding: '0px',
        borderRadius: '0px',
        backgroundColor: '#ffffff',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    yearDivs: {
        gap: '10px'
    },
};

export default PastReviews;
