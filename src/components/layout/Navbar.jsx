import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Package, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 pb-1 ${
      isActive
        ? 'text-accent border-b-2 border-accent'
        : 'text-slate-700 hover:text-accent'
    }`;

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 md:gap-3 group" onClick={closeMobile}>
          <img src={`${import.meta.env.BASE_URL}images/divine-pic.png`} alt="Divine Logo" className="h-8 sm:h-10 md:h-12 object-contain" />
          <span className="text-xs sm:text-base md:text-xl font-bold tracking-tight text-[#0d7a31] uppercase leading-tight whitespace-nowrap">
            Divine Packaging Industry
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass} end={link.path === '/'}>
              {link.name}
            </NavLink>
          ))}
          <img src={`${import.meta.env.BASE_URL}images/iso1.png`} alt="ISO Certified" className="h-14 md:h-16 object-contain ml-4" />
        </div>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-600 text-white text-sm font-semibold rounded-btn transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 md:top-20 bg-black/30 z-40 lg:hidden"
              onClick={closeMobile}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-16 md:top-20 right-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Mobile Nav Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.25 }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        onClick={closeMobile}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                            isActive
                              ? 'text-accent bg-accent/5 border-l-4 border-accent'
                              : 'text-slate-700 hover:text-accent hover:bg-slate-50'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pb-8 pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center w-full px-5 py-3 bg-accent hover:bg-accent-600 text-white text-base font-semibold rounded-btn transition-colors duration-200 shadow-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
