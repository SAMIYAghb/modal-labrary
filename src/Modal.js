import React from "react";
import { createPortal } from "react-dom";
import './Modal.css';



const Modal = ({ isOpen, onClose,  children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {/* <h2>{title}</h2>
        <p>{content}</p> */}
        {children}
        <button onClick={onClose} className="close">Close</button>
      </div>
    </div>
  );
};

export default Modal;