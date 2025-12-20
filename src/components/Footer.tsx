import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../../onlyLogo_final.png';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectService: (service: 'automation' | 'marketing' | 'web' | 'design') => void;
}

const Footer = ({ onNavigate, onSelectService }: FooterProps) => {

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HridxAI logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-gradient">HridxAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Where Business Meets Intelligence. AI automation and client management solutions for
              modern enterprises.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/hridyesh__hg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://linkedin.com/hridyesh-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://github.com/hridyesh-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="mailto:contact@hridx.tech"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    onSelectService('automation');
                    onNavigate('services');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  AI Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectService('marketing');
                    onNavigate('services');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectService('web');
                    onNavigate('services');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Website & App
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectService('design');
                    onNavigate('services');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Design & Branding
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="https://hridyesh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About the founder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41767053502"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +41 767053502
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@hridx.tech"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  contact@hridx.tech
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/hridyesh-gupta1206/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HridxAI. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
