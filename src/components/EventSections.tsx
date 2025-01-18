import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Sponsor, Organizer, Community } from '../types';

interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Section({ title, className = '', children }: SectionProps) {
  return (
    <div className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <Section title="Our Sponsors" className="bg-black">
      <div className="space-y-20">
        {['title', 'gold', 'silver', 'bronze'].map((tier) => {
          const tierSponsors = sponsors.filter(s => s.type === tier);
          if (tierSponsors.length === 0) return null;
          
          return (
            <div key={tier} className="space-y-8">
              <h3 className="text-3xl font-bold text-white capitalize text-center">
                {tier} Sponsors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-xl p-6 flex flex-col items-center"
                  >
                    <a 
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <div className="w-32 h-32 mx-auto mb-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 text-center">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-400 text-center">{sponsor.description}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function CommunitiesSection({ communities }: { communities: Community[] }) {
  return (
    <Section title="Organizing Communities" className="bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((community) => (
          <motion.div
            key={community.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={community.logo}
                alt={community.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {community.name}
            </h3>
            <p className="text-gray-400 text-center mb-4">{community.description}</p>
            <div className="text-center">
              <a
                href={community.joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function OrganizersSection({ organizers }: { organizers: Organizer[] }) {
  return (
    <Section title="Event Organizers" className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizers.map((organizer) => (
          <motion.div
            key={organizer.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center"
          >
            {organizer.photo && (
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={organizer.photo}
                  alt={organizer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-1">{organizer.name}</h3>
            {organizer.designation && (
              <p className="text-gray-400 mb-2">{organizer.designation}</p>
            )}
            <p className="text-indigo-400 mb-4">{organizer.role}</p>
            {organizer.socialLinks && (
              <div className="flex space-x-4">
                {organizer.socialLinks.linkedin && (
                  <a
                    href={organizer.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {organizer.socialLinks.twitter && (
                  <a
                    href={organizer.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {organizer.socialLinks.github && (
                  <a
                    href={organizer.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}