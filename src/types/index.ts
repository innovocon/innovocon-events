export interface Event {
  id: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  image: string;
  path: string;
  organizers: Organizer[];
  sponsors: Sponsor[];
  communities: Community[];
}

export interface Organizer {
  name: string;
  type: 'community' | 'college' | 'company';
  designation?: string;
  photo?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  role: string;
}

export interface Sponsor {
  name: string;
  type: 'title' | 'gold' | 'silver' | 'bronze';
  logo: string;
  website: string;
  description: string;
}

export interface Community {
  name: string;
  logo: string;
  description: string;
  joinLink: string;
}

export interface EventDetails {
  title: string;
  date: string;
  venue: string;
  description: string;
  prizePool: string;
  teamSize: string;
  organizers: Organizer[];
  sponsors: Sponsor[];
  communities: Community[];
}