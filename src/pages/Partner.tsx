import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Users, Rocket, Globe } from 'lucide-react';

export function Partner() {
  const benefits = [
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Expand your reach and connect with like-minded communities'
    },
    {
      icon: Rocket,
      title: 'Collaborative Events',
      description: 'Co-create and participate in innovative tech events'
    },
    {
      icon: Globe,
      title: 'Network Access',
      description: 'Join a network of leading tech communities and organizations'
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Become a Community Partner</h1>
          <p className="text-xl text-gray-300">Join forces with InnovoCon to create amazing experiences</p>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 text-center"
              >
                <benefit.icon className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Partnership Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Get in Touch', desc: 'Reach out to us with your community details' },
              { step: '02', title: 'Discussion', desc: 'Let\'s discuss collaboration opportunities' },
              { step: '03', title: 'Agreement', desc: 'Finalize partnership terms and scope' },
              { step: '04', title: 'Launch', desc: 'Start our journey together' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Partner?</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for amazing communities to partner with. If you're interested in joining forces,
            let's start a conversation!
          </p>
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors">
            Contact Us
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}