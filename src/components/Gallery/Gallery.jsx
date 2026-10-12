import { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={image.id || index} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={image.src} 
                alt={image.alt || 'Gallery image'} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </>
  );
};

export default Gallery;
