import React, { useState } from 'react';
import './Projects.css';
import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import video1 from "../assets/project1.mp4";
import project2 from "../assets/abielevation.png";
import plan from "../assets/IMG-20240622-WA0007.jpg";
import video3 from "../assets/VID20240617153232.mp4";
import video2 from "../assets/Modern Finished Residential Building_KING TECH BUILDERS__tirunelveli and _tuticorin(720P_HD).webm";
import projectVideo from "../assets/project2.mp4";

const projectsData = [
  { 
    name: 'Susanna Home Interior Design', 
    mediaType: 'video', 
    media: video1, 
    location: 'Thoothukudi, Mukkani', 
    details: 'A modern luxury interior design project.', 
    status: 'finished' 
  },
  { 
    name: 'Abi Home Elevation', 
    mediaType: 'image', 
    media: project2, 
    location: 'Thoothukudi, Mukkani', 
    details: 'A chic urban home elevation project.', 
    status: 'finished' 
  },
  { 
    name: 'Plan Approval', 
    mediaType: 'image', 
    media: plan, 
    location: 'Thoothukudi, Tamil Nadu', 
    details: 'Completed hundreds of plans for our clients.', 
    status: 'finished' 
  },
  { 
    name: 'Shop Construction Robinson', 
    mediaType: 'video', 
    media: video3, 
    location: 'Thoothukudi, Mappilaiyoorani', 
    details: 'Construction project for Robinson\'s shop.', 
    status: 'ongoing' 
  },
  { 
    name: 'Arulanadu House', 
    mediaType: 'video', 
    media: video2, 
    location: 'Tirunelveli, GangaiKondan', 
    details: 'A cozy house construction in the mountains.', 
    status: 'finished' 
  },
  { 
    name: 'Gomathi Home Elevation', 
    mediaType: 'video', 
    media: projectVideo, 
    location: 'Thoothukudi', 
    details: 'Home elevation project in a quiet suburb.', 
    status: 'finished' 
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects section" id="projects">
      <div className="projects-intro">
        <h2 className="projects-heading">Our Projects</h2>
        <p className="projects-description">
          Explore our diverse range of construction projects, from luxury villas to urban apartments. Each project showcases our commitment to quality and excellence in design and construction.
        </p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <div className="project-media-container">
              {project.mediaType === 'image' ? (
                <img src={project.media} alt={project.name} className="project-media" />
              ) : (
                <ReactPlayer
                  url={project.media}
                  controls={true}
                  muted={true}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="100%"
                  className="project-media"
                />
              )}
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-location">{project.location}</p>
              <p className="project-details">{project.details}</p>
            </div>
            <div className={`project-status ${project.status}`}>
              {project.status === 'finished' ? <FaCheckCircle /> : <FaHourglassHalf />}
            </div>
          </div>
        ))}
      </div>
      <Modal show={!!selectedProject} onClose={closeModal} project={selectedProject} />
    </div>
  );
}

export default Projects;
