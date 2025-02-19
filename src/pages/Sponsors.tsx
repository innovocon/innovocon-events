import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

const sponsors = [
  {
    name: 'TechCorp',
    tier: 'title',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
    description: 'Leading technology solutions provider'
  },
  {
    name: 'CloudNet',
    tier: 'gold',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80',
    description: 'Cloud infrastructure and services'
  },
  {
    name: 'SecureGuard',
    tier: 'gold',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    description: 'Cybersecurity solutions'
  },
  {
    name: 'GameVerse',
    tier: 'silver',
    logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    description: 'Gaming and entertainment'
  }
];

export function Sponsors() {
  return (
    <div className="pt-16">
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Sponsors</h1>
          <p className="text-xl text-gray-300">Partnering with industry leaders to foster innovation</p>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {['title', 'gold', 'silver'].map((tier) => (
              <div key={tier} className="space-y-8">
                <h2 className="text-3xl font-bold text-white capitalize text-center">
                  {tier} Sponsors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sponsors
                    .filter((sponsor) => sponsor.tier === tier)
                    .map((sponsor) => (
                      <motion.div
                        key={sponsor.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-xl p-6 flex flex-col items-center"
                      >
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                        <p className="text-gray-400 text-center">{sponsor.description}</p>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}