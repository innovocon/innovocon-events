import { motion } from 'framer-motion';
import { Code2, Flag, Gamepad2, Box } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          InnovoCon 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Hack. Design. Compete.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Code2, title: 'HackNex', desc: '24-Hour Hackathon', path: '/hacknex' },
            { icon: Flag, title: 'HackFlag', desc: 'Capture the Flag', path: 'https://www.thecyberdojo.net/' },
            { icon: Box, title: 'Think 3D', desc: '3D Design Competition', path: 'https://think-3d.smdverse.cloud' },
            { icon: Gamepad2, title: 'Zenith', desc: 'eSports Tournament', path: '/zenith' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
            >
              <item.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
