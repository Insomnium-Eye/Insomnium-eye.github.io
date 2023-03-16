import React, { useState, useEffect } from 'react';

import img1 from './images/CK_Headshot.png';
import img2 from './images/CK_SwordSlash.png';
import img3 from './images/CK_WhipSlash.png';
import img4 from './images/CK_WhipSlash2.png';
import img5 from './images/Crimson_Kaizer.png';
import img6 from './images/Fenryr.png';
import img7 from './images/page_3C.png';
import img8 from './images/Reyi.png';
import img9 from './images/RinerisF.png';
import img10 from './images/Rineris_Moves.png';
import img11 from './images/SkySniper.png';
import img12 from './images/Thug_1.png';
import img13 from './images/Thug_Grenade.png';
import img14 from './images/Thug_MiniGun.png';
import img15 from './images/Thug_Moves1.png';
import img16 from './images/Thug_Moves2.png';
import img17 from './images/Thug_Pistol.png';
import img18 from './images/Thug_Rifle.png';
import img19 from './images/Thug_Shotgun.png';
import img20 from './images/Thug_Spear.png';
import img21 from './images/Thug_Sword.png';
import img22 from './images/Thug_Throw.png';

const images = [
  { src: img1, alt: 'Crimson Kaizer, Front' },
  { src: img2, alt: 'Crimson Kaizer, Sword slash' },
  { src: img3, alt: 'Crimson Kaizer, Whip Slash 1' },
  { src: img4, alt: 'Crimson Kaizer, Whip Slash 2' },
  { src: img5, alt: 'Crimson Kaizer, Concept Art' },
  { src: img6, alt: 'Fenryr, Concept Art'},
  { src: img7, alt: 'Idyll Haven page'},
  { src: img8, alt: 'Reyinumate, Arm Shocker'},
  { src: img9, alt: 'Rineris, Smoke witch'},
  { src: img10, alt: 'Rineris, Moveset'},
  { src: img11, alt: 'Zephyre, Sky Sniper'},
  { src: img12, alt: 'Thug, Concept'},
  { src: img13, alt: 'Thug, Grenade'},
  { src: img14, alt: 'Thug, MiniGun'},
  { src: img15, alt: 'Thug, Moves1'},
  { src: img16, alt: 'Thug, Moves2'},
  { src: img17, alt: 'Thug, Pistol'},
  { src: img18, alt: 'Thug, Rifle'},
  { src: img19, alt: 'Thug, Shotgun'},
  { src: img20, alt: 'Thug, Spear'},
  { src: img21, alt: 'Thug, Sword'},
  { src: img22, alt: 'Thug, Throw'},
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
    maxWidth: '90%',
    maxHeight: '90%',
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
    color: '#fff',
    zIndex: 3,
    border: '2px solid black',
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
