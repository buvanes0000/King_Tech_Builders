import React from 'react';
import './Service.css';
import { FaHammer, FaPaintRoller, FaTree, FaHome, FaBuilding, FaDraftingCompass, FaBug, FaRoad, FaCubes, FaLandmark } from 'react-icons/fa';

const servicesData = [
  { icon: <FaHammer />, title: 'Construction', description: 'High-quality construction services for residential and commercial properties.' },
  { icon: <FaPaintRoller />, title: 'Renovation', description: 'Expert renovation services to transform your existing spaces.' },
  { icon: <FaTree />, title: 'Landscaping', description: 'Beautiful and functional landscaping designs and maintenance.' },
  { icon: <FaHome />, title: 'Interior Design', description: 'Creative and practical interior design solutions for your home.' },
  { icon: <FaBuilding />, title: 'Plan Approval', description: 'Assistance with obtaining all necessary plan approvals and permits.' },
  { icon: <FaDraftingCompass />, title: 'Architectural 2D and 3D Design', description: 'Professional 2D and 3D design services for your architectural needs.' },
  { icon: <FaBug />, title: 'Pest Control', description: 'Effective pest control services to keep your property safe and clean.' },
  { icon: <FaRoad />, title: 'Infrastructure Works', description: 'Comprehensive infrastructure services for roads, utilities, and more.' },
  { icon: <FaCubes />, title: 'BIM', description: 'Building Information Modeling (BIM) services for efficient project planning and execution.' },
  { icon: <FaLandmark />, title: 'Land Promoters', description: 'Expert services for land development and promotion.' }
];

const Services = () => {
  return (
    <div className="services section" id='service' >
      <div className="services-intro">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-description">
          At our construction company, we offer a wide range of services to meet all your building and renovation needs. From initial plan approval to final landscaping touches, our team of experts ensures quality and satisfaction in every project. Explore our services below to learn more about how we can help you build your dream home or commercial space.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
