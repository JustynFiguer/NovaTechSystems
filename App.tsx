import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { About, Ministries, LiveAndSermons, Giving, Events, Contact } from './pages/ContentPages';

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Floating Visit Counter Component
const VisitCounter: React.FC = () => {
  const [visits, setVisits] = React.useState<number>(0);

  React.useEffect(() => {
    const storedVisits = localStorage.getItem('site_visits');
    let count = storedVisits ? parseInt(storedVisits, 10) : 15420; // Default starting number
    
    // Simulate a visit increment (in a real app, this would come from a backend)
    // We use sessionStorage to avoid incrementing on every refresh in the same session, 
    // or just increment for demo purposes. Here we increment on every load for effect.
    count++;
    
    localStorage.setItem('site_visits', count.toString());
    setVisits(count);
  }, []);

  if (visits === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-kingdom-navy/90 backdrop-blur-sm border border-kingdom-gold/30 text-kingdom-gold pl-3 pr-4 py-2 rounded-full shadow-xl flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest animate-fade-in-up hover:bg-kingdom-navy transition-colors cursor-default select-none">
      <Eye size={14} className="text-white/80" />
      <span>Visitas: <span className="text-white ml-1">{visits.toLocaleString()}</span></span>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/sermons" element={<LiveAndSermons />} />
            <Route path="/live" element={<LiveAndSermons />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<div className="pt-32 text-center text-gray-500 min-h-screen">Sección de Recursos en construcción...</div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <VisitCounter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;