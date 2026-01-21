import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Video, Heart, Users, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Datos de los "Flyers" (Diapositivas del Portafolio)
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop", // Crowd/Worship
    subtitle: "Nuestra Identidad",
    title: "PASIÓN POR",
    highlight: "LAS ALMAS",
    description: "Un ministerio dedicado a alcanzar a los perdidos y restaurar vidas para el Reino de Dios.",
    primaryButtonText: "Conoce Más",
    primaryButtonLink: "/about",
    align: "center"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1600&auto=format&fit=crop", // Church Service
    subtitle: "Te Esperamos",
    title: "CASA DE DIOS",
    highlight: "PUERTA DEL CIELO",
    description: "Domingos 10:00 AM | Miércoles 7:00 PM. Ven con tu familia y recibe tu milagro.",
    primaryButtonText: "Ver Ubicación",
    primaryButtonLink: "/contact",
    align: "left"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=2070&auto=format&fit=crop", // Technology/Live
    subtitle: "Iglesia Online",
    title: "CONÉCTATE",
    highlight: "EN VIVO",
    description: "No importa dónde estés, la presencia de Dios no tiene fronteras. Únete a nuestra transmisión.",
    primaryButtonText: "Ver Ahora",
    primaryButtonLink: "/live",
    align: "right"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop", // Giving/Hands
    subtitle: "Siembra y Cosecha",
    title: "TU GENEROSIDAD",
    highlight: "CAMBIA VIDAS",
    description: "Tu aporte nos ayuda a seguir llevando el evangelio a las naciones.",
    primaryButtonText: "Dar Ofrenda",
    primaryButtonLink: "/giving",
    align: "center"
  }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* Hero Section - PORTAFOLIO DE FLYERS / SLIDER HORIZONTAL */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-kingdom-navy group">
        
        {/* Slider Container (Horizontal Movement) */}
        <div 
            className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {slides.map((slide) => (
                <div key={slide.id} className="relative w-full h-full flex-shrink-0">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                         {/* Capas de oscurecimiento para legibilidad */}
                         <div className="absolute inset-0 bg-kingdom-navy/40 mix-blend-multiply"></div>
                         <div className="absolute inset-0 bg-gradient-to-t from-kingdom-navy via-transparent to-transparent opacity-80"></div>
                         <div className="absolute inset-0 bg-gradient-to-b from-kingdom-navy/30 to-transparent"></div>
                    </div>

                    {/* Content Overlay - Posicionamiento Dinámico */}
                    <div className={`absolute inset-0 flex items-center px-6 md:px-16 lg:px-24 ${
                        slide.align === 'left' ? 'justify-start' : 
                        slide.align === 'right' ? 'justify-end' : 
                        'justify-center'
                    }`}>
                        <div className={`max-w-4xl space-y-6 ${
                             slide.align === 'left' ? 'text-left' : 
                             slide.align === 'right' ? 'text-right' : 
                             'text-center'
                        }`}>
                            {/* Badge */}
                            <div className={`inline-flex items-center space-x-3 mb-2 px-4 py-1.5 bg-black/30 backdrop-blur-md border border-white/10 rounded-full shadow-lg ${
                                slide.align === 'center' ? 'mx-auto' : 
                                slide.align === 'right' ? 'ml-auto' : ''
                            }`}>
                                <span className="w-2 h-2 rounded-full bg-kingdom-gold animate-pulse"></span>
                                <span className="text-kingdom-gold font-bold uppercase tracking-widest text-xs">{slide.subtitle}</span>
                            </div>

                            {/* Título Principal */}
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none drop-shadow-2xl">
                                {slide.title} <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kingdom-gold via-[#fcf6ba] to-kingdom-gold">
                                    {slide.highlight}
                                </span>
                            </h1>

                            {/* Descripción */}
                            <p className={`font-serif text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed drop-shadow-md ${
                                slide.align === 'center' ? 'mx-auto' : 
                                slide.align === 'right' ? 'ml-auto' : ''
                            }`}>
                                {slide.description}
                            </p>

                            {/* Botón de Acción */}
                            <div className={`pt-8 ${
                                slide.align === 'center' ? 'flex justify-center' : 
                                slide.align === 'right' ? 'flex justify-end' : 'flex justify-start'
                            }`}>
                                <Link 
                                    to={slide.primaryButtonLink}
                                    className="bg-kingdom-gold text-kingdom-navy px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1 rounded-sm border-2 border-kingdom-gold"
                                >
                                    {slide.primaryButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Flechas de Navegación */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 md:px-8">
            <button 
                onClick={prevSlide}
                className="pointer-events-auto p-4 rounded-full bg-black/20 hover:bg-kingdom-gold text-white hover:text-kingdom-navy backdrop-blur-sm transition-all duration-300 border border-white/10 group-hover:scale-110 shadow-lg"
            >
                <ChevronLeft size={32} />
            </button>
            <button 
                onClick={nextSlide}
                className="pointer-events-auto p-4 rounded-full bg-black/20 hover:bg-kingdom-gold text-white hover:text-kingdom-navy backdrop-blur-sm transition-all duration-300 border border-white/10 group-hover:scale-110 shadow-lg"
            >
                <ChevronRight size={32} />
            </button>
        </div>

        {/* Indicadores (Puntos) */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                        index === currentSlide 
                            ? 'w-16 bg-kingdom-gold' 
                            : 'w-4 bg-white/40 hover:bg-white'
                    }`}
                    aria-label={`Ir al anuncio ${index + 1}`}
                />
            ))}
        </div>
      </section>

      {/* Verse of the Day Strip */}
      <div className="bg-kingdom-gold py-12 px-4 relative overflow-hidden shadow-2xl z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h3 className="font-display text-kingdom-navy/70 text-sm tracking-widest uppercase mb-4 border-b border-kingdom-navy/10 inline-block pb-1">Palabra del Día</h3>
           <p className="font-serif text-2xl md:text-4xl text-kingdom-navy italic font-bold leading-relaxed drop-shadow-sm">
             "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas."
           </p>
           <p className="mt-6 text-kingdom-navy font-black uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-2">
             <span className="w-8 h-px bg-kingdom-navy/40"></span>
             Mateo 6:33
             <span className="w-8 h-px bg-kingdom-navy/40"></span>
           </p>
        </div>
      </div>

      {/* Welcome / Intro */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-3">
                 <div className="h-0.5 w-12 bg-kingdom-gold"></div>
                 <span className="text-kingdom-gold font-bold uppercase tracking-wider text-sm">Bienvenidos</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-kingdom-navy leading-tight">
                Una Iglesia Viva para <br/> un <span className="text-transparent bg-clip-text bg-gradient-to-r from-kingdom-gold to-[#967711]">Dios Vivo</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gray-100 pl-6">
                Somos una comunidad de fe apasionada por la presencia de Dios. Creemos en el poder transformador del Evangelio y en la restauración de las familias. Nuestro anhelo es que cada persona pueda tener un encuentro personal con Jesucristo.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-kingdom-navy font-bold hover:text-kingdom-gold transition-colors uppercase tracking-wide group">
                  <span className="border-b-2 border-kingdom-gold pb-1 group-hover:border-kingdom-navy transition-colors">Nuestra Visión</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-kingdom-gold z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1600&auto=format&fit=crop" 
                  alt="Comunidad Cristiana Adorando" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-kingdom-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-kingdom-gold z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-24 bg-kingdom-navy text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kingdom-gold/30 to-transparent"></div>
        <div className="absolute -left-20 top-20 w-96 h-96 bg-kingdom-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
             <span className="text-kingdom-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Crecimiento Espiritual</span>
             <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">Nuestra Vida Ministerial</h2>
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-kingdom-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Card 1 */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-kingdom-gold/50 shadow-lg hover:shadow-kingdom-gold/10">
                <div className="w-20 h-20 mx-auto bg-kingdom-navy rounded-full flex items-center justify-center mb-6 text-kingdom-gold border border-kingdom-gold/30 group-hover:border-kingdom-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Video size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-kingdom-gold transition-colors">Predicaciones</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Mensajes bíblicos que edificarán tu vida y fortalecerán tu fe en Cristo.</p>
                <Link to="/sermons" className="text-kingdom-gold text-xs font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Ver Mensajes</Link>
             </div>
             
             {/* Card 2 */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-kingdom-gold/50 shadow-lg hover:shadow-kingdom-gold/10">
                <div className="w-20 h-20 mx-auto bg-kingdom-navy rounded-full flex items-center justify-center mb-6 text-kingdom-gold border border-kingdom-gold/30 group-hover:border-kingdom-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Calendar size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-kingdom-gold transition-colors">Eventos</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Congresos, campañas y actividades diseñadas para toda la familia.</p>
                <Link to="/events" className="text-kingdom-gold text-xs font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Ver Calendario</Link>
             </div>

             {/* Card 3 */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-kingdom-gold/50 shadow-lg hover:shadow-kingdom-gold/10">
                <div className="w-20 h-20 mx-auto bg-kingdom-navy rounded-full flex items-center justify-center mb-6 text-kingdom-gold border border-kingdom-gold/30 group-hover:border-kingdom-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Users size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-kingdom-gold transition-colors">Ministerios</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Áreas de servicio para Jóvenes, Damas, Caballeros y Niños.</p>
                <Link to="/ministries" className="text-kingdom-gold text-xs font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Involúcrate</Link>
             </div>

             {/* Card 4 */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 text-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-kingdom-gold/50 shadow-lg hover:shadow-kingdom-gold/10">
                <div className="w-20 h-20 mx-auto bg-kingdom-navy rounded-full flex items-center justify-center mb-6 text-kingdom-gold border border-kingdom-gold/30 group-hover:border-kingdom-gold group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Heart size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-kingdom-gold transition-colors">Dar</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Tu siembra hace posible que el mensaje de salvación siga avanzando.</p>
                <Link to="/giving" className="text-kingdom-gold text-xs font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Sembrar Ahora</Link>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-kingdom-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="font-serif text-4xl md:text-5xl text-kingdom-navy font-bold mb-6">¿Necesitas Oración?</h2>
           <div className="h-1 w-20 bg-kingdom-navy mx-auto mb-8"></div>
           <p className="text-kingdom-navy/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
             Creemos en el poder de la oración. Nuestro equipo de intercesión está listo para ponerse de acuerdo contigo y clamar al cielo por tu milagro. No estás solo.
           </p>
           <Link to="/contact" className="inline-block bg-kingdom-navy text-white hover:bg-white hover:text-kingdom-navy border-2 border-kingdom-navy px-12 py-5 font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl hover:shadow-xl hover:-translate-y-1">
             Enviar Petición
           </Link>
        </div>
      </section>
    </div>
  );
};