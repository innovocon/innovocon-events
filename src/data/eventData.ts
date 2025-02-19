import { EventDetails } from '../types';

export const initialEventData: Record<string, EventDetails> = {
  home: {
    title: 'InnovoCon 2025',
    date: 'February 27-28, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Hack. Design. Compete.',
    prizePool: '₹52,000',
    teamSize: 'Varies by Event',
    organizers: [
      // ... existing organizers
    ],
    sponsors: [
      {
        name: 'JIS Group',
        type: 'title',
        logo: '/images/logos/jis-group.png',
        website: 'https://jisgroup.org',
        description: 'Leading educational institution'
      },
      {
        name: 'Merchanzi',
        type: 'gold',
        logo: '/images/logos/merchanzi.png',
        website: 'https://merchanzi.com',
        description: 'Innovative merchandise solutions'
      }
    ],
    communities: [
      // ... existing communities
    ]
  },
  hacknex: {
    title: 'HackNex 2025',
    date: 'February 27-28, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Hack. Build. Revolutionize.',
    prizePool: '₹12,000 + Exclusive Prizes',
    teamSize: '2-4 Members',
    organizers: [
      // ... existing organizers
    ],
    sponsors: [
      // ... existing sponsors plus Merchanzi
    ],
    communities: [
      // ... existing communities
    ]
  },
  zenith: {
    title: 'Zenith 2025',
    date: 'February 28, 2025',
    venue: 'JIS College of Engineering, Kalyani',
    description: 'Dominate. Conquer. Reign.',
    prizePool: '₹11,000',
    teamSize: 'BGMI: 4 Players / Valorant: 5 Players',
    organizers: [
      // ... existing organizers
    ],
    sponsors: [
      // ... existing sponsors plus Merchanzi
    ],
    communities: [
      // ... existing communities
    ]
  }
};