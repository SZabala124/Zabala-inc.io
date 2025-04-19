import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={handleModalClick}>
      <div className="modal-content">
        <video className="modal-video-background" autoPlay muted loop>
          <source src="/fondo_blanco.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-grid">
          <h2 className="modal-title">{image?.name || 'Imagen'}</h2>
          
          <div className="modal-image-container">
            <img src={image?.url} alt={image?.name} className="modal-image" />
          </div>
          
          <div className="modal-info">
            <p className="modal-description">{image?.description || 'Sin descripción disponible.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;