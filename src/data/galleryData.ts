export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Leadership' | 'Research' | 'Conferences';
  imageUrl: string;
  caption: string;
  year?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'DAV University Main Academic & Administrative Block',
    category: 'Campus',
    imageUrl: '/images/dav_university_campus.jpg',
    caption: 'The majestic administrative building and neoclassical academic campus of DAV University, Jalandhar.',
    year: '2026'
  },
  {
    id: 'gal-02',
    title: 'Advanced Photonics & Optical Communications Research Lab',
    category: 'Research',
    imageUrl: '/images/photonics_laser_lab.jpg',
    caption: 'State-of-the-art optical fiber and laser research bench for soliton dispersion investigations and wireless optical communication.',
    year: '2025'
  },
  {
    id: 'gal-03',
    title: 'Central University Library & Academic Archives',
    category: 'Campus',
    imageUrl: '/images/academic_library_hall.jpg',
    caption: 'Extensive scholarly repository housing thousands of engineering, science, and management journals and reference volumes.',
    year: '2025'
  },
  {
    id: 'gal-04',
    title: 'Annual University Convocation & Leadership Dais',
    category: 'Leadership',
    imageUrl: '/images/leadership_convocation_ceremony.jpg',
    caption: 'Presiding over academic convocations and honoring distinguished scholars, doctoral recipients, and medalists.',
    year: '2025'
  }
];
