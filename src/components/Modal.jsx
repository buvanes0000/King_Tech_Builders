import React from 'react';
import ReactPlayer from 'react-player';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}><FaTimes /></button>
        <div className="modal-media-container">
          {project.mediaType === 'image' ? (
            <img src={project.media} alt={project.name} className="modal-media" />
          ) : (
            <ReactPlayer
              url={project.media}
              controls={true}
              width="100%"
              height="100%"
              playing={true}
            />
          )}
        </div>
        <div className="modal-info">
          <h2 className="modal-name">{project.name}</h2>
          <p className="modal-location">{project.location}</p>
          <p className="modal-details">{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
