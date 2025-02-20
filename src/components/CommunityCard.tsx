import { motion } from 'framer-motion';

interface CommunityProps {
  name: string;
  logo: string;
  description: string;
  joinLink: string;
}

export function CommunityCard({ name, logo, description, joinLink }: CommunityProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-700 p-2">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-center mb-4">{description}</p>
        <a
          href={joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Join Community
        </a>
      </div>
    </motion.div>
  );
}