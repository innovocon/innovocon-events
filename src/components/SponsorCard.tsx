import { motion } from 'framer-motion';

interface SponsorProps {
  name: string;
  type: 'title' | 'gold' | 'silver' | 'bronze';
  logo: string;
  website: string;
  description: string;
}

export function SponsorCard({ name, type, logo, website, description }: SponsorProps) {
  const typeColors = {
    title: 'from-purple-500/20 to-purple-900/20',
    gold: 'from-yellow-500/20 to-yellow-900/20',
    silver: 'from-gray-400/20 to-gray-800/20',
    bronze: 'from-orange-500/20 to-orange-900/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl p-6 overflow-hidden hover:bg-gray-700 transition-all duration-300"
    >
      <div className="relative z-10">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="w-32 h-32 mx-auto mb-4 p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 text-center">{name}</h3>
          <p className="text-gray-400 text-center">{description}</p>
        </a>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t ${typeColors[type]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}