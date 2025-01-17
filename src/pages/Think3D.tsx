import { motion } from 'framer-motion';
import { Cube, Clock, Users, Trophy, Calendar } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function Think3D() {
  const stats = [
    { icon: Calendar, title: 'Date', desc: 'February 15, 2025' },
    { icon: Users, title: 'Team Size', desc: '1-2 Members' },
    { icon: Trophy, title: 'Prize Pool', desc: '$3,000' },
    { icon: Clock, title: 'Duration', desc: '12 Hours' },
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Think 3D</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Design. Create. Innovate.</p>
          <button className="bg-white text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-teal-100 transition-colors">
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
                <item.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Design Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Product Design',
                desc: 'Create innovative consumer products with focus on functionality and aesthetics.',
                prize: '$1,000',
              },
              {
                title: 'Architectural Visualization',
                desc: 'Design and visualize architectural spaces and structures.',
                prize: '$1,000',
              },
              {
                title: 'Character Design',
                desc: 'Model and design characters for games and animation.',
                prize: '$1,000',
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-4">{category.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-teal-400">First Prize</span>
                  <span className="text-white font-semibold">{category.prize}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Competition Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Rules</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  All designs must be original and created during the competition
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  Participants can use any 3D modeling software
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  Final submission must include source files and renders
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  Teams can participate in multiple categories
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Judging Criteria</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Creativity & Innovation</span>
                  <span className="text-teal-400">30%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Technical Execution</span>
                  <span className="text-teal-400">25%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Visual Appeal</span>
                  <span className="text-teal-400">25%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Practicality & Usability</span>
                  <span className="text-teal-400">20%</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}