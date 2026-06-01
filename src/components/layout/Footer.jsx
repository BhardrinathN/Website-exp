import { Link } from 'react-router-dom';
import {
  Package,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

import { fallbackLocations } from '../../lib/fallbackData';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 group mb-5">
              <img src={`${import.meta.env.BASE_URL}images/divine-pic.png`} alt="Divine Logo" className="h-10 md:h-12 object-contain" />
              <span className="text-lg font-bold tracking-wide text-white uppercase">
                Divine Packaging Industry
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              India's trusted manufacturer of premium corrugated boxes and
              industrial packaging solutions, delivering quality since inception.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white/70 hover:bg-accent hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Quick Links
              <span className="block mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Our Locations
              <span className="block mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-5">
              {fallbackLocations.map((loc) => (
                <li key={loc._id} className="flex gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white/90">
                      {loc.name}
                    </span>
                    <span className="block text-xs text-white/60 leading-relaxed mt-0.5">
                      {loc.address}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative">
              Contact Info
              <span className="block mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50 uppercase tracking-wider mb-0.5">
                    Phone
                  </span>
                  <a
                    href="tel:+919840343704"
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    +91 98403 43704
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50 uppercase tracking-wider mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:info@divinepackaging.in"
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    info@divinepackaging.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50 uppercase tracking-wider mb-0.5">
                    Working Hours
                  </span>
                  <span className="text-sm text-white/70">
                    Mon–Sat: 9:00 AM – 6:00 PM
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © 2026 Divine Packaging Industry. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right">
            Designed with care for Industrial India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
