import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../onlyLogo_final.png';

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ activePage, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Features', page: 'features' },
    { name: 'Services', page: 'services' },
    { name: 'Results', page: 'clients' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`glass-effect rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'shadow-2xl glow-effect' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <img src={logo} alt="HridxAI logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-gradient">HridxAI</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activePage === link.page
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://hridyesh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect px-4 py-2.5 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                About the founder
              </a>
              <a
                href="https://calendly.com/hridyesh-gupta1206/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105"
              >
                Book a Call
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-lg" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 bottom-0 w-64 glass-effect border-l border-white/10 p-6"
            >
              <div className="flex flex-col gap-6 mt-20">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-left text-lg"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href="https://hridyesh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-6 py-3 rounded-full font-medium text-center text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  About the founder
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                  href="https://calendly.com/hridyesh-gupta1206/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
                >
                  Book a Call
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
