import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Diamond, Award, Medal } from 'lucide-react';

export function SponsorUs() {
  const sponsorshipTiers = [
    {
      name: 'Title Sponsor',
      icon: Diamond,
      price: '$5,000+',
      benefits: [
        'Exclusive branding as "Title Sponsor"',
        'Prime logo placement on all materials',
        'Dedicated social media promotion',
        'VIP access to all events',
        'Speaking opportunity at main event',
        'Booth space at prime location',
        'Access to participant database'
      ]
    },
    {
      name: 'Gold Sponsor',
      icon: Award,
      price: '$3,000',
      benefits: [
        'Premium logo placement',
        'Social media promotion',
        'Booth space',
        'Event passes',
        'Participant resume access',
        'Brand mention in press releases'
      ]
    },
    {
      name: 'Silver Sponsor',
      icon: Medal,
      price: '$1,000',
      benefits: [
        'Logo on website and materials',
        'Social media mention',
        'Event passes',
        'Brand visibility at venue',
        'Networking opportunities'
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Sponsor InnovoCon</h1>
          <p className="text-xl text-gray-300">Partner with us to empower the next generation of innovators</p>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Sponsorship Tiers</h2>
            <p className="mt-4 text-gray-400">Choose the perfect sponsorship package for your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <tier.icon className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white text-center mb-4">{tier.name}</h3>
                <p className="text-3xl font-bold text-yellow-400 text-center mb-6">{tier.price}</p>
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-yellow-400 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
                  Contact Us
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why Sponsor InnovoCon?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Visibility',
                description: 'Reach thousands of tech enthusiasts, developers, and industry professionals.'
              },
              {
                title: 'Talent Access',
                description: 'Connect with top tech talent and potential future employees.'
              },
              {
                title: 'Community Impact',
                description: 'Support the growth of the tech community and foster innovation.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}