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
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
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