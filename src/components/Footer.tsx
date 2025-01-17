import { Linkedin, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  const events = [
    { name: 'HackNex', path: '/hacknex' },
    { name: 'HackFlag', path: 'https://www.thecyberdojo.net/' },
    { name: 'Think 3D', path: 'https://think-3d.smdverse.cloud' },
    { name: 'Zenith', path: '/zenith' }
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/innovoconevents', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61571332025094', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/innovoconevents/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/Innovoconevents', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">InnovoCon 2025</h3>
            <p className="text-gray-400">Hack. Design. Compete.</p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Events</h3>
            <ul className="space-y-2">
              {events.map((event) => (
                <li key={event.name}>
                  <a
                    href={event.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {event.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <a 
                href="https://maps.app.goo.gl/HZrKXZKMHDFGWrJc7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                JIS College of Engineering
                Block A, Phase III, Kalyani, West Bengal 741235
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Contact: innovocon.events@gmail.com</p>
              <p className="text-gray-400">Phone: +91 7439611385</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 InnovoCon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}