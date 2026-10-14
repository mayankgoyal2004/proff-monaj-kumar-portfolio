import React, { useState } from 'react';
import { 
  Newspaper, 
  Eye,
  ArrowRight
} from 'lucide-react';
import { pressClippings } from '../data/newsMediaData';
import { NewsImageLightbox } from './NewsImageLightbox';

interface NewsMediaProps {
  onNavigate?: (sectionId: string) => void;
}

export const NewsMedia: React.FC<NewsMediaProps> = () => {
  // Lightbox modal state for Left-Right image gallery
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleOpenLightbox = (index: number = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="section-content-wrapper">
      {/* Header Section */}
      <div className="content-header">
        <div className="academic-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">News & Media Coverage</span>
        </div>
        <div className="content-eyebrow">Archival Press Bureau & Print Media</div>
        <h2 className="content-title">News & Media Coverage</h2>
        <div className="content-subtitle">
          Original archival press coverage and newspaper features highlighting Prof. (Dr.) Manoj Kumar
        </div>
      </div>

      {/* Archival Newspaper Clippings Section */}
      <div className="news-clippings-showcase">
        <div className="news-clippings-header">
          <div className="news-clippings-title-group">
            <h3>
              <Newspaper size={20} color="var(--color-crimson-800)" />
              <span>Archival Newspaper Clippings & Print Features</span>
            </h3>
            <p>
              Original press clippings from leading national and state dailies. Click any clipping to open the interactive Left/Right popup viewer.
            </p>
          </div>
        </div>

        <div className="news-clippings-grid">
          {pressClippings.map((clip, idx) => (
            <div
              key={clip.id}
              className="news-clipping-card"
              onClick={() => handleOpenLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenLightbox(idx);
                }
              }}
              title={`Click to inspect ${clip.newspaper} clipping in Left/Right viewer`}
            >
              <div className="news-clipping-img-wrap">
                <img
                  src={clip.imageUrl}
                  alt={clip.headline}
                  className="news-clipping-img"
                  loading="lazy"
                />
                <div className="news-clipping-overlay">
                  <span className="news-clipping-zoom-badge">
                    <Eye size={12} /> Click to View Clipping ({idx + 1}/{pressClippings.length})
                  </span>
                  <span className="badge badge-gold" style={{ fontSize: '0.74rem' }}>
                    {clip.date}
                  </span>
                </div>
              </div>

              <div className="news-clipping-body">
                <div className="news-clipping-meta-row">
                  <span className="badge badge-crimson">{clip.newspaper}</span>
                  {clip.edition && <span className="badge badge-surface">{clip.edition}</span>}
                  <span className="badge badge-surface">{clip.language}</span>
                </div>

                <h4 className="news-clipping-headline">{clip.headline}</h4>
                <p className="news-clipping-sub">{clip.subheadline || clip.description}</p>

                <div className="news-clipping-action">
                  <span>Open Left/Right Viewer</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newspaper Clipping Interactive Left-Right Lightbox */}
      <NewsImageLightbox
        isOpen={isLightboxOpen}
        clippings={pressClippings}
        currentIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </div>
  );
};

export default NewsMedia;
