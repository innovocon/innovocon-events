import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface OrganizerProps {
  name: string;
  designation: string;
  photo: string;
  role: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export function OrganizerCard({ name, designation, photo, role, socialLinks }: OrganizerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl p-6 overflow-hidden hover:bg-gray-700 transition-all duration-300"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-indigo-500 transition-all duration-300">
          <img
            src={photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-indigo-400 mb-2">{designation}</p>
        <p className="text-gray-400">{role}</p>
        
        {socialLinks && (
          <div className="flex space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}