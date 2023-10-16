import React from 'react';
import PropTypes from 'prop-types';
import Gallery from './GalleryDiv';

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>
                    &times;
                </span>
                <h2>Image Gallery</h2>
                <Gallery />
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
