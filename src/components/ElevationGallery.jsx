import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './ElevationGallery.css';
import { EffectCube, Pagination } from 'swiper/modules';

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import g9 from "../assets/g9.png";
import g10 from "../assets/g10.png";
import g11 from "../assets/g11.png";
import g12 from "../assets/g12.png";
import g13 from "../assets/g13.png";
import g14 from "../assets/g14.png";
import g15 from "../assets/g15.png";

const ElevationGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="swiper-container">
        <h3 className='swiper-heading'>Elevation Work Gallery</h3>
        <p className='swiper-content' style={{textAlign:"center"}}>Explore our stunning elevation works in the gallery below. Discover how we blend creativity and craftsmanship to transform spaces into architectural masterpieces.</p>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => openModal(image)}>
              <img src={image} alt={`Elevation ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={currentImage} alt="Full View" />
        </div>
      )}
    </>
  );
};

export default ElevationGallery;
