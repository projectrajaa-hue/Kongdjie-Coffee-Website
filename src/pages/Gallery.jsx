import { useState } from 'react';
import GalleryComponent from '../components/Gallery/Gallery';
import './Gallery.css';

const galleryImages = [
  { id: 1, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200', alt: 'Interior 1' },
  { id: 2, category: 'COFFEE', src: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1200', alt: 'Coffee 1' },
  { id: 3, category: 'ATMOSPHERE', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200', alt: 'Atmosphere 1' },
  { id: 4, category: 'FOOD', src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=1200', alt: 'Food 1' },
  { id: 5, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200', alt: 'Interior 2' },
  { id: 6, category: 'EVENTS', src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200', alt: 'Events 1' },
  { id: 7, category: 'COFFEE', src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200', alt: 'Coffee 2' },
  { id: 8, category: 'FOOD', src: 'https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=1200', alt: 'Food 2' },
  { id: 9, category: 'ATMOSPHERE', src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1200', alt: 'Atmosphere 2' },
  { id: 10, category: 'COFFEE', src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1200', alt: 'Coffee 3' },
  { id: 11, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200', alt: 'Interior 3' },
  { id: 12, category: 'EVENTS', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200', alt: 'Events 2' },
];

const categories = ['ALL', 'INTERIOR', 'COFFEE', 'FOOD', 'ATMOSPHERE', 'EVENTS'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredImages = activeCategory === 'ALL'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page page-transition">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=2000" alt="Kongdjie Coffee Gallery" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content text-center">
          <h1>Gallery</h1>
          <p>Momen dan memori di Kongdjie Coffee.</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredImages.length > 0 ? (
            <GalleryComponent images={filteredImages} />
          ) : (
            <p className="no-images">Images coming soon.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
