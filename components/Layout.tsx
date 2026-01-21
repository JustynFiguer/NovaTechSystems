import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Youtube, Instagram, MapPin, Phone, Mail, Globe } from 'lucide-react';

const navigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/about' },
  { label: 'Ministerios', path: '/ministries' },
  { label: 'En Vivo', path: '/live' },
  { label: 'Predicaciones', path: '/sermons' },
  { label: 'Eventos', path: '/events' },
  { label: 'Recursos', path: '/resources' },
  { label: 'Contacto', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Calculate top offset based on scroll state (py-4 = ~80px, py-2 = ~64px)
  const menuTopOffset = scrolled ? '65px' : '88px';

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${
          scrolled 
            ? 'bg-kingdom-navy shadow-xl py-2 border-kingdom-gold' 
            : 'bg-kingdom-navy/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logos Section (Visible on Navbar) */}
            <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
              <div className="flex items-center space-x-2">
                 {/* Logo 1 - Embajada */}
                 <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-full flex items-center justify-center border-2 border-kingdom-gold overflow-hidden shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-kingdom-navy font-bold text-xs text-center leading-none">EC<br/>PA</span>
                 </div>
                 
                 {/* Logo 2 - HDR */}
                 <div className="h-10 w-10 sm:h-12 sm:w-12 bg-kingdom-gold rounded-full flex items-center justify-center text-kingdom-navy font-bold border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-[10px] text-center font-display leading-tight">HDR</span>
                 </div>
              </div>
              <div className="hidden md:block pl-3 border-l border-white/20 ml-3">
                <h1 
                  className="text-2xl md:text-3xl font-display tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] via-[#fcf6ba] via-[#edc967] via-[#fcf6ba] to-[#b8860b] bg-[length:200%_auto] animate-shimmer transform group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.8))' }}
                >
                  HOMBRES DEL REINO
                </h1>
                <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gray-300 font-bold ml-1 text-shadow-sm">Ministerio Evangelístico</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ animationDelay: scrolled ? `${index * 50}ms` : '0ms' }}
                  className={`px-3 py-2 text-xs font-bold transition-all duration-200 uppercase tracking-widest relative group ${
                    location.pathname === item.path ? 'text-kingdom-gold' : 'text-gray-300 hover:text-white'
                  } ${scrolled ? 'animate-fade-in-up' : ''}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-kingdom-gold transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              <div className={`pl-4 ${scrolled ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: scrolled ? `${navigation.length * 50}ms` : '0ms' }}>
                <Link 
                  to="/giving" 
                  className="bg-kingdom-gold text-kingdom-navy px-5 py-2 rounded-sm font-bold uppercase tracking-widest text-xs transition-all duration-300 border-2 border-kingdom-gold hover:bg-transparent hover:text-kingdom-gold shadow-md hover:shadow-kingdom-gold/20"
                >
                  Donaciones
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-kingdom-gold transition-colors p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} className="animate-pulse text-kingdom-gold" /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`xl:hidden fixed inset-0 z-40 bg-kingdom-navy/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
          style={{ top: menuTopOffset, height: `calc(100vh - ${menuTopOffset})` }}
        >
          <div className="px-4 py-8 space-y-3 h-full overflow-y-auto pb-32">
            
            {/* LOGOS Y NOMBRE - REORGANIZADO PARA MÓVIL (LOGO IZQ | TEXTO | LOGO DER) */}
            <div className={`flex items-center justify-between mb-8 pb-6 border-b border-white/10 transition-all duration-700 delay-100 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                {/* Logo 1 - Left */}
                <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center border-2 border-kingdom-gold overflow-hidden shadow-lg shadow-kingdom-gold/20">
                      <span className="text-kingdom-navy font-bold text-xs text-center leading-none">EC<br/>PA</span>
                    </div>
                </div>
                
                {/* Title - Center */}
                <div className="flex-grow text-center px-2">
                  <h1 
                    className="text-xl font-display tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] via-[#fcf6ba] via-[#edc967] via-[#fcf6ba] to-[#b8860b] bg-[length:200%_auto] animate-shimmer leading-tight"
                    style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.8))' }}
                  >
                    HOMBRES<br/>DEL REINO
                  </h1>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold mt-1">Ministerio Evangelístico</p>
                </div>

                {/* Logo 2 - Right */}
                <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-kingdom-gold rounded-full flex items-center justify-center text-kingdom-navy font-bold border-2 border-white shadow-lg shadow-kingdom-gold/20">
                      <span className="text-sm text-center font-display leading-tight">HDR</span>
                    </div>
                </div>
            </div>

            {/* Links del Menú */}
            {navigation.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${index * 60 + 200}ms` : '0ms' }}
                className={`block px-4 py-4 text-lg font-display tracking-widest border-l-4 transition-all duration-700 ease-out transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                } ${
                  location.pathname === item.path 
                    ? 'border-kingdom-gold text-kingdom-gold bg-white/5' 
                    : 'border-transparent text-white hover:text-kingdom-gold hover:border-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
             <div 
               style={{ transitionDelay: isOpen ? `${navigation.length * 60 + 200}ms` : '0ms' }}
               className={`mt-8 transition-all duration-700 ease-out transform ${
                 isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
               }`}
             >
               <Link 
                 to="/giving" 
                 onClick={() => setIsOpen(false)} 
                 className="block text-center bg-kingdom-gold text-kingdom-navy px-4 py-4 text-lg font-bold rounded-sm shadow-lg uppercase tracking-widest border-2 border-kingdom-gold hover:bg-transparent hover:text-kingdom-gold transition-all"
               >
                Donaciones
               </Link>
             </div>
            
            <div 
               style={{ transitionDelay: isOpen ? `${navigation.length * 60 + 300}ms` : '0ms' }}
               className={`mt-12 border-t border-gray-700 pt-8 text-center transition-all duration-1000 ease-out transform ${
                 isOpen ? 'opacity-100' : 'opacity-0'
               }`}
            >
               <p className="text-gray-400 text-sm mb-4">Síguenos en redes</p>
               <div className="flex justify-center space-x-6 text-kingdom-gold">
                  <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Instagram size={24} /></a>
                  <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><Youtube size={24} /></a>
               </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kingdom-navy text-white pt-16 pb-8 border-t-4 border-kingdom-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-kingdom-gold blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-900 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Identity */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-kingdom-gold">Hombres del Reino</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un ministerio comprometido con la Gran Comisión, segando almas para el Reino de Dios y estableciendo la cultura del Cielo en la Tierra.
            </p>
            <div className="pt-4 flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-kingdom-gold transition-colors transform hover:scale-110"><Facebook /></a>
               <a href="#" className="text-gray-400 hover:text-kingdom-gold transition-colors transform hover:scale-110"><Instagram /></a>
               <a href="#" className="text-gray-400 hover:text-kingdom-gold transition-colors transform hover:scale-110"><Youtube /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-kingdom-gold transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-kingdom-gold rounded-full mr-2"></span>Nuestra Historia</Link></li>
              <li><Link to="/ministries" className="hover:text-kingdom-gold transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-kingdom-gold rounded-full mr-2"></span>Ministerios</Link></li>
              <li><Link to="/events" className="hover:text-kingdom-gold transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-kingdom-gold rounded-full mr-2"></span>Próximos Eventos</Link></li>
              <li><Link to="/giving" className="hover:text-kingdom-gold transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-kingdom-gold rounded-full mr-2"></span>Siembra</Link></li>
              <li><Link to="/contact" className="hover:text-kingdom-gold transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-kingdom-gold rounded-full mr-2"></span>Peticiones de Oración</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-kingdom-gold shrink-0 mt-1 group-hover:text-white transition-colors" size={18} />
                <span>Av. Principal, Edificio Embajada de Cristo, Ciudad de Panamá.</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-kingdom-gold shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>+507 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-kingdom-gold shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>contacto@hombresdelreino.org</span>
              </li>
            </ul>
          </div>

          {/* Verse */}
          <div>
             <h4 className="font-serif text-lg mb-6 border-b border-gray-700 pb-2 inline-block pr-8">Palabra Viva</h4>
             <blockquote className="italic text-gray-300 border-l-2 border-kingdom-gold pl-4 my-4 font-serif">
               "Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura."
             </blockquote>
             <p className="text-kingdom-gold text-right text-sm font-bold tracking-wider">- Marcos 16:15</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ministerio Evangelístico Hombres del Reino. Todos los derechos reservados.</p>
          <p className="mt-2 opacity-60">Bajo la cobertura del Concilio Embajada de Cristo Internacional.</p>
        </div>
      </div>
    </footer>
  );
};