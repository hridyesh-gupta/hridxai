import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import AudioShowcase from './components/AudioShowcase';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeService, setActiveService] = useState<'automation' | 'marketing' | 'web' | 'design'>(
    'automation',
  );

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'features':
        return (
          <>
            <Features />
            <Process />
          </>
        );
      case 'services':
        return (
          <>
            <Services activeService={activeService} onActiveServiceChange={setActiveService} />
            <Booking />
          </>
        );
      case 'process':
        return (
          <>
            <Features />
            <Process />
            <AudioShowcase />
          </>
        );
      case 'clients':
        return (
          <>
            <Clients />
            <Testimonials />
          </>
        );
      case 'contact':
        return (
          <>
            <Booking />
            <FAQ />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services activeService={activeService} onActiveServiceChange={setActiveService} />
            <Clients />
            <Booking />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />
      <main className={activePage === 'home' ? '' : 'pt-28'}>{renderContent()}</main>
      <Footer onNavigate={handleNavigate} onSelectService={setActiveService} />
      <a
        href="https://wa.me/41772908325?text=I%20am%20interested%20for%20your%20service"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
}

export default App;
