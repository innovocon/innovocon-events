import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="pt-16">
      <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </motion.div>
      </div>

      <AnimatedSection className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">innovocon.events@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">+91 7439611385</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">
                    JIS College of Engineering<br />
                    Block A, Phase III, Kalyani<br />
                    West Bengal 741235
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  title="Event Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234753776574!2d88.44291937531897!3d22.99029377919579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8952d71094a7f%3A0x8f1c6d3ff467d96b!2sJIS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709705840040!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}