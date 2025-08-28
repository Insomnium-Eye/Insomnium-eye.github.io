// Modal.js (Refined for proper centering, reduced stretching, and increased margins)
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden'; // Lock background scroll
        } else {
            document.body.style.overflow = ''; // Unlock when closed
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [props.isOpen]);

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="modal" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent backdrop
            display: 'flex',
            alignItems: 'center', // Vertical centering
            justifyContent: 'center', // Horizontal centering
            zIndex: 1000,
            overflowY: 'hidden' // Prevent backdrop scroll
        }}>
            <div className="modal-content" style={{
                backgroundColor: 'rgba(50, 40, 70, 0.9)', // Match content background
                padding: '20px',
                borderRadius: '8px',
                position: 'relative',
                maxWidth: '70%', // Reduced max-width to prevent horizontal stretching
                maxHeight: '70vh', // Reduced max-height to prevent vertical stretching
                overflowY: 'auto', // Enable internal scrolling
                textAlign: 'left', // Align text left for readability
                color: 'white',
                margin: '15vh auto' // Increased top margin, auto left/right for true centering
            }}>
                <span className="close" onClick={props.onClose}>
                    &times;
                </span>
                {props.children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node // Allow any renderable content
};

export default Modal;