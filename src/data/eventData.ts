import { EventDetails } from '../types';

export const initialEventData: Record<string, EventDetails> = {
  home: {
    title: 'InnovoCon 2025',
    date: 'February 15-16, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Hack. Design. Compete.',
    prizePool: '$25,000',
    teamSize: 'Varies by Event',
    organizers: [
      {
        name: 'John Doe',
        type: 'community',
        designation: 'Lead Organizer',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        role: 'Event Director',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/johndoe',
          twitter: 'https://twitter.com/johndoe',
          github: 'https://github.com/johndoe'
        }
      }
    ],
    sponsors: [
      {
        name: 'TechCorp',
        type: 'title',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
        website: 'https://example.com',
        description: 'Leading technology solutions provider'
      }
    ],
    communities: [
      {
        name: 'IEEE Student Branch JISCE',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
        description: 'Technical community of JISCE',
        joinLink: 'https://example.com/join'
      }
    ]
  },
  hacknex: {
    title: 'HackNex 2025',
    date: 'February 15-16, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Hack. Build. Revolutionize.',
    prizePool: '$10,000',
    teamSize: '2-4 Members',
    organizers: [
      {
        name: 'Jane Smith',
        type: 'community',
        designation: 'Hackathon Lead',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        role: 'Event Coordinator',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/janesmith',
          twitter: 'https://twitter.com/janesmith',
          github: 'https://github.com/janesmith'
        }
      }
    ],
    sponsors: [
      {
        name: 'CloudNet',
        type: 'title',
        logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80',
        website: 'https://example.com',
        description: 'Cloud infrastructure and services'
      }
    ],
    communities: [
      {
        name: 'GDSC JISCE',
        logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80',
        description: 'Google Developer Student Clubs JISCE',
        joinLink: 'https://example.com/join'
      }
    ]
  },
  hackflag: {
    title: 'HackFlag 2025',
    date: 'February 15-16, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Decode. Defend. Conquer.',
    prizePool: '$5,000',
    teamSize: '1-3 Members',
    organizers: [
      {
        name: 'Mike Johnson',
        type: 'community',
        designation: 'Security Lead',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        role: 'CTF Coordinator',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/mikejohnson',
          twitter: 'https://twitter.com/mikejohnson',
          github: 'https://github.com/mikejohnson'
        }
      }
    ],
    sponsors: [
      {
        name: 'SecureGuard',
        type: 'gold',
        logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
        website: 'https://example.com',
        description: 'Cybersecurity solutions'
      }
    ],
    communities: [
      {
        name: 'CSI Student Branch JISCE',
        logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
        description: 'Computer Society of India JISCE Chapter',
        joinLink: 'https://example.com/join'
      }
    ]
  },
  zenith: {
    title: 'Zenith 2025',
    date: 'February 16, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Dominate. Conquer. Reign.',
    prizePool: '$7,000',
    teamSize: 'Solo & Team',
    organizers: [
      {
        name: 'Alex Chen',
        type: 'community',
        designation: 'Gaming Lead',
        photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
        role: 'Tournament Director',
        socialLinks: {
          linkedin: 'https://linkedin.com/in/alexchen',
          twitter: 'https://twitter.com/alexchen',
          github: 'https://github.com/alexchen'
        }
      }
    ],
    sponsors: [
      {
        name: 'GameVerse',
        type: 'title',
        logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
        website: 'https://example.com',
        description: 'Gaming and entertainment'
      }
    ],
    communities: [
      {
        name: 'ESports Club JISCE',
        logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
        description: 'Official ESports Club of JISCE',
        joinLink: 'https://example.com/join'
      }
    ]
  }
};