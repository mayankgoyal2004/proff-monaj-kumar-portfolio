import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Calendar, Layers } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/galleryData';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Research', 'Leadership'];

  const filteredPhotos = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(p => p.category === activeCategory);

  return (
    <div className="section-content-wrapper">
      <div className="content-header">
        <div className="academic-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Photo Gallery</span>
        </div>
        <div className="content-eyebrow">Visual Archives</div>
        <h2 className="content-title">Campus, Leadership & Research Gallery</h2>
        <div className="content-subtitle">
          Photographic glimpses of university campus landmarks, state-of-the-art photonics laboratories, and ceremonial leadership events
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="awards-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${galleryItems.length})` : ''}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-card"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="gallery-thumb-wrapper">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="gallery-thumb-img"
              />
              <span className="badge badge-gold gallery-category-badge">
                {photo.category}
              </span>
            </div>

            <div className="gallery-info">
              <h4 className="gallery-title">{photo.title}</h4>
              <p className="gallery-caption">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPhoto(null)}>
              <X size={20} />
            </button>
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="lightbox-image"
            />
            <div className="lightbox-details">
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-crimson">{selectedPhoto.category}</span>
                {selectedPhoto.year && <span className="badge badge-gold">{selectedPhoto.year}</span>}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-crimson-900)', marginBottom: '0.35rem' }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
