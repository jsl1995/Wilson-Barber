export interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface JsonLdProps {
  type: string;
  data: Record<string, any>;
}