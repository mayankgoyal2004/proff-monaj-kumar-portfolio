import React from 'react';
import { Users, FileText, GraduationCap, BookOpen, Lightbulb, Award, Globe, ShieldCheck } from 'lucide-react';
import { executiveProfile } from '../data/profileData';

export const StatStrip: React.FC = () => {
  const stats = [
    {
      label: 'Years Academic Leadership',
      value: `${executiveProfile.metrics.experienceYears}+`,
      icon: Users,
      iconClass: 'stat-icon-crimson'
    },
    {
      label: 'Research Publications',
      value: `${executiveProfile.metrics.publicationsCount}+`,
      icon: FileText,
      iconClass: 'stat-icon-navy'
    },
    {
      label: 'Ph.D. Scholars Supervised',
      value: `0${executiveProfile.metrics.phdSupervisedCount}`,
      icon: GraduationCap,
      iconClass: 'stat-icon-crimson'
    },
    {
      label: 'Books Authored & Chapters',
      value: `13`,
      icon: BookOpen,
      iconClass: 'stat-icon-green'
    },
    {
      label: 'Patents to Credit',
      value: `0${executiveProfile.metrics.patentsCount}`,
      icon: Lightbulb,
      iconClass: 'stat-icon-gold'
    },
    {
      label: 'National & Global Awards',
      value: `${executiveProfile.metrics.awardsCount}+`,
      icon: Award,
      iconClass: 'stat-icon-crimson'
    },
    {
      label: 'Strategic MoUs & Alliances',
      value: `${executiveProfile.metrics.mousCount}+`,
      icon: Globe,
      iconClass: 'stat-icon-navy'
    }
  ];

  return (
    <section className="stat-strip">
      <div className="container">
        <div className="stat-strip-grid">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="stat-strip-item">
                <div className={`stat-icon-wrapper ${item.iconClass}`}>
                  <IconComponent size={20} />
                </div>
                <div>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
