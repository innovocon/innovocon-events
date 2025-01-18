import { motion } from 'framer-motion';
import { Flag, Users, Trophy, Timer, Calendar } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function HackFlag() {
  const stats = [
    { icon: Calendar, title: 'Date', desc: 'February 15-16, 2025' },
    { icon: Users, title: 'Team Size', desc: '1-3 Members' },
    { icon: Trophy, title: 'Prize Pool', desc: '$5,000' },
    { icon: Timer, title: 'Duration', desc: '24 Hours' },
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">HackFlag 2025</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Decode. Defend. Conquer.</p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-100 transition-colors">
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
                <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Challenge Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Security',
                desc: 'Test your skills in web application security, including XSS, CSRF, and SQL injection challenges.',
              },
              {
                title: 'Cryptography',
                desc: 'Solve complex cryptographic puzzles and break secure communication systems.',
              },
              {
                title: 'Reverse Engineering',
                desc: 'Analyze and understand compiled programs to find vulnerabilities and hidden flags.',
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
                <p className="text-gray-400">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}