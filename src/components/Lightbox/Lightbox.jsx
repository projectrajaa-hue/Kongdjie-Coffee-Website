import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scroll on body
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <X size={32} />
        </button>
        
        <button className="lightbox-nav prev" onClick={() => onNavigate('prev')} aria-label="Previous image">
          <ChevronLeft size={36} />
        </button>
        
        <div className="lightbox-image-wrapper">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt || 'Gallery image'} 
            className="lightbox-image"
          />
          <div className="lightbox-caption">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        <button className="lightbox-nav next" onClick={() => onNavigate('next')} aria-label="Next image">
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
