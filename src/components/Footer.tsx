import React from 'react';
import { GraduationCap, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { executiveProfile } from '../data/profileData';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="academic-footer-simple">
      <div className="container">
        <div className="footer-simple-content">
          <div className="footer-simple-left">
            <div className="footer-crest-icon">
              <GraduationCap size={16} />
            </div>
            <div className="footer-identity-text">
              <span className="footer-name">{executiveProfile.fullName}</span>
              <span className="footer-dot">•</span>
              <span className="footer-role">Vice-Chancellor, DAV University, Jalandhar</span>
              <span className="footer-dot">•</span>
              <span className="footer-extra">Dean's Visiting Scholar, Univ of Memphis (USA)</span>
            </div>
          </div>

          <div className="footer-simple-right">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Prof. (Dr.) Manoj Kumar • All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
