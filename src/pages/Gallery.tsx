import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Camera } from 'lucide-react';

export function Gallery() {
  return (
    <div className="pt-16">
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-gray-300">Capturing moments of innovation and creativity</p>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Camera className="w-16 h-16 text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
            <p className="text-gray-400 max-w-2xl">
              We're preparing to showcase the amazing moments from our events. 
              Check back soon to see the gallery filled with inspiring photos and memories.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}