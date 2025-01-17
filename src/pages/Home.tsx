import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export function Home() {
  const sponsors = [
    { 
      name: 'JIS Group', 
      type: 'title',
      logo: '/images/logos/jis-group.png',
      website: 'https://jisgroup.org'
    },
    { 
      name: 'JIS College of Engineering', 
      type: 'title',
      logo: '/images/logos/jisce.png',
      website: 'https://jiscollege.ac.in'
    },
    { 
      name: '.xyz Domain', 
      type: 'gold',
      logo: '/images/logos/xyz-domain.png',
      website: 'https://gen.xyz'
    },
    { 
      name: 'CyberDojo: The School of CyberDefense', 
      type: 'gold',
      logo: '/images/logos/cyberdojo.png',
      website: 'https://www.thecyberdojo.net'
    }
  ];

  const organizers = [
    { 
      name: 'Chirag Nahata', 
      role: 'Lead Organiser',
      photo: '/images/team/chirag.jpg',
      designation: 'Community Lead',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/chirag-nahata/',
        github: 'https://github.com/chiragnahata',
      }
    },
    { 
      name: 'Snigdha Ghosh', 
      role: 'Vice - Lead Organiser',
      photo: '/images/team/snigdha.jpg',
      designation: 'Vice - Lead Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/snigdha-ghosh-834435297/',
        github: 'https://github.com/snig-code16'
      }
    },
    { 
      name: 'Srijita Saha', 
      role: 'Organiser',
      photo: '/images/team/srijita.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Shamonnoy Halder', 
      role: 'Organiser',
      photo: '/images/team/shamonnoy.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Somyadip Ghosh', 
      role: 'Organiser',
      photo: '/images/team/somyadip.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Milind Kundu', 
      role: 'Organiser',
      photo: '/images/team/milind.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Rajarshi Bhowmik', 
      role: 'Organiser',
      photo: '/images/team/rajarshi.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://linktr.ee/rajo7',
        github: 'https://linktr.ee/rajo7',
      }
    },
    { 
      name: 'Purba Saha', 
      role: 'Organiser',
      photo: '/images/team/purba.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/purba-saha-b273a12b8',
        github: 'https://github.com/Purba234',
      }
    },
    { 
      name: 'Rajat Mitra', 
      role: 'Organiser',
      photo: '/images/team/rajat.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/rajat-mitra-337754295/',
        github: 'https://github.com/RAJAT-MITRA',
      }
    },
    { 
      name: 'Roshan Kumar Yadav', 
      role: 'Organiser',
      photo: '/images/team/roshan.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Sagar Shaw', 
      role: 'Organiser',
      photo: '/images/team/sagar.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/sagar-shaw-27189b28b',
        github: '',
      }
    },
    { 
      name: 'Prinjal Mistry', 
      role: 'Organiser',
      photo: '/images/team/prinjal.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/prinjal-mistry-06b633339/',
        github: '',
      }
    },
    { 
      name: 'Rohit Ghosh', 
      role: 'Organiser',
      photo: '/images/team/rohit.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Spandan Tah', 
      role: 'Organiser',
      photo: '/images/team/spandan.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: '',
        github: '',
      }
    },
    { 
      name: 'Sahin Molla', 
      role: 'Organiser',
      photo: '/images/team/sahin.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/sahinmolla',
        github: '',
      }
    },
    { 
      name: 'Ankit Shaw', 
      role: 'Organiser',
      photo: '/images/team/ankit.jpg',
      designation: 'Organiser',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/ankit-shaw-1aa169309',
        github: '',
      }
    }
  ];

  const communities = [
    { 
      name: 'Tech Defenders', 
      role: 'Lead Community',
      logo: '/images/logos/tech-defenders.png',
      joinLink: 'https://chat.whatsapp.com/HmxbBIoEpDL8v9ptWa3Xr5'
    },
    { 
      name: 'The Risers', 
      role: 'Partner Community',
      logo: '/images/logos/risers.png',
      joinLink: 'https://chat.whatsapp.com/C5uRzUqWbyOFRBdQgP6tcC'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
              >
                <a 
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg p-2">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-xl">More Coming Soon...</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Event Organizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizers.map((organizer) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={organizer.photo}
                      alt={organizer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{organizer.name}</h3>
                  <p className="text-gray-400">{organizer.role}</p>
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <div className="text-center">
                      <p className="text-white font-semibold mb-2">{organizer.designation}</p>
                      <div className="flex justify-center space-x-4">
                        {organizer.socialLinks.linkedin && (
                          <a
                            href={organizer.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                        {organizer.socialLinks.twitter && (
                          <a
                            href={organizer.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.243 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.92.43.37.823 1.096.823 2.21 0 1.596-.014 2.883-.014 3.273 0 .322.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Event Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((community) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg p-2">
                  <img
                    src={community.logo}
                    alt={community.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                <p className="text-gray-400 mb-4">{community.role}</p>
                <a
                  href={community.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Join Community
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Community Partners</h2>
          <div className="text-center">
            <p className="text-2xl text-gray-400">Coming Soon...</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}