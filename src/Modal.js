import React from "react";
import { createPortal } from "react-dom";
import './Modal.css';

/**
 * Modal component that displays a modal dialog.
 * 
 * @component
 * @param {Object} props - The properties for the modal.
 * @param {boolean} props.isOpen - Determines if the modal should be visible. If false, the modal is not rendered.
 * @param {function} props.onClose - Function to close the modal when triggered.
 * @param {React.ReactNode} props.children - Custom content to be displayed inside the modal.
 * 
 * @returns {JSX.Element|null} Returns the modal JSX element or null if the modal is closed.
 */


const Modal = ({ isOpen, onClose,  children }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {children}
        <button onClick={onClose} className="close">Close</button>
      </div>
    </div>
  );
};

export default Modal;