import { motion } from 'framer-motion';
import { Code2, Users, Trophy, Timer, Calendar, Laptop, Brain, Rocket, Target } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function HackNex() {
  const stats = [
    { icon: Calendar, title: 'Date', desc: 'February 15-16, 2025' },
    { icon: Users, title: 'Team Size', desc: '2-4 Members' },
    { icon: Trophy, title: 'Prize Pool', desc: 'To be announced' },
    { icon: Timer, title: 'Duration', desc: '24 Hours' },
  ];

  const tracks = [
    { icon: Laptop, name: 'Open Innovation', desc: 'Build innovative solutions for real-world problems' },
    { icon: Brain, name: 'HealthTech', desc: 'Revolutionize healthcare with technology' },
    { icon: Rocket, name: 'FinTech', desc: 'Transform financial services' },
    { icon: Target, name: 'EdTech', desc: 'Innovate in education' },
    { icon: Code2, name: 'Web 3.0', desc: 'Build the decentralized future' },
    { icon: Brain, name: 'Green Tech', desc: 'Sustainable solutions for a better world' }
  ];

  const organizers = [
    { 
      name: 'Chirag Nahata',
      role: 'Community Lead',
      photo: '/images/team/chirag.jpg',
      designation: 'Community Lead',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        twitter: 'https://twitter.com/chiragnahata'
      }
    },
    { 
      name: 'Snigdha Ghosh',
      role: 'Vice Community Lead',
      photo: '/images/team/snigdha.jpg',
      designation: 'Vice Community Lead',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/snigdhaghosh',
        twitter: 'https://twitter.com/snigdhaghosh'
      }
    },
    { 
      name: 'Srijita Saha', 
      role: 'Coordinator',
      photo: '/images/team/srijita.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    },
    { 
      name: 'Shamonnoy Halder', 
      role: 'Coordinator',
      photo: '/images/team/shamonnoy.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    },
    { 
      name: 'Somyadip Ghosh', 
      role: 'Coordinator',
      photo: '/images/team/somyadip.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    },
    { 
      name: 'Milind Kundu', 
      role: 'Coordinator',
      photo: '/images/team/milind.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    },
    { 
      name: 'Rajarshi Bhowmik', 
      role: 'Coordinator',
      photo: '/images/team/rajarshi.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    },
    { 
      name: 'Purba Saha', 
      role: 'Coordinator',
      photo: '/images/team/purba.jpg',
      designation: 'Coordinator',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/chiragnahata',
        github: 'https://linkedin.com/in/chiragnahata',
      }
    }
  ];

  const communities = [
    { 
      name: 'Tech Defenders',
      logo: '/images/logos/tech-defenders.png',
      description: 'Leading tech community at JISCE',
      joinLink: 'https://chat.whatsapp.com/HmxbBIoEpDL8v9ptWa3Xr5'
    }
  ];

  const sponsors = [
    { 
      name: 'JIS Group',
      logo: '/images/logos/jis-group.png',
      website: 'https://jisgroup.org'
    },
    { 
      name: 'JIS College of Engineering',
      logo: '/images/logos/jisce.png',
      website: 'https://jiscollege.ac.in'
    },
    { 
      name: '.xyz Domain',
      logo: '/images/logos/xyz-domain.png',
      website: 'https://gen.xyz'
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">HackNex 2025</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Hack. Build. Revolutionize.</p>
          <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-100 transition-colors">
            Register Now
          </button>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
              >
                <track.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white text-center mb-2">{track.name}</h3>
                <p className="text-gray-400 text-center">{track.desc}</p>
              </motion.div>
            ))}
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
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
          <h2 className="text-4xl font-bold text-white text-center mb-16">Organizing Communities</h2>
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
                <p className="text-gray-400 mb-4">{community.description}</p>
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
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  );
}
