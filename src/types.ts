export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'electricity' | 'plumbing' | 'both';
  iconName: string;
  image: string;
  details: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'electricity' | 'plumbing' | 'install' | 'maintenance';
  image: string;
  description: string;
  location?: string;
  tech?: string;
  guarantee?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  description: string;
  date: string;
}
