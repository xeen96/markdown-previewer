import React, { useState } from "react";
import './modal.css'

function TitleModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    onSubmit(title);
    setTitle(""); // Очистить поле после отправки
    onClose();    // Закрыть модалку
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Document Title</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Document Title"
        />
        <div className="modal-actions">
          <button className="btn-modal" onClick={onClose}>Cancel</button>
          <button className="btn-modal" onClick={handleSubmit} disabled={!title.trim()}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleModal;
