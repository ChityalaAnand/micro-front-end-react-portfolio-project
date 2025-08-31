import React from "react";
export default function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
}
