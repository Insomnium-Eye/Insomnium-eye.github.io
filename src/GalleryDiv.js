import React, { useState, useEffect } from 'react';

import img1 from './images/CK_Headshot.png';


const images = [
  { src: img1, alt: 'Crimson Kaizer, Front' },
];

const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    maxWidth: '100%',
    maxHeight: '100%',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
};

const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '3rem',
    color: 'red',
    zIndex: 3,
};


function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    const thumbnailStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        margin: '5px',
        cursor: 'pointer',
    };

    const galleryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gridAutoRows: '100px',
        gap: '5px',
        padding: '10px',
    };

    function handleClick(image, index) {
        setSelectedImage(image);
        setCurrentIndex(index);
    }

    function handleClose() {
        setSelectedImage(null);
    }

    function handleNext(e) {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % totalImages;
        setSelectedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    }

    function handlePrev(e) {
        e.stopPropagation();
        const prevIndex = (currentIndex + totalImages - 1) % totalImages;
        setSelectedImage(images[prevIndex]);
        setCurrentIndex(prevIndex);
    }


    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'Escape') {
                handleClose();
            }
        }
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyPress);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedImage, handleNext, handlePrev, handleClose]);


    return (
        <>
            <div style={galleryStyle}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={thumbnailStyle}
                        onClick={() => handleClick(image, index)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div style={modalStyle} onClick={handleClose}>
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{ ...arrowStyle, left: 0 }}
                            onClick={handlePrev}
                        >
                            &#10094;
                        </div>
                        <div
                            style={{ ...arrowStyle, right: 0 }}
                            onClick={handleNext}
                        >
                            &#10095;
                        </div>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={imageStyle}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Gallery;
