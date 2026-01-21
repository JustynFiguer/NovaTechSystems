import React from 'react';
import { Play, Download, MapPin, Calendar, Clock, CreditCard, Heart, CheckCircle, Smartphone } from 'lucide-react';
import { Ministry, Sermon, Event } from '../types';

// --- ABOUT PAGE ---
export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-12 md:pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-kingdom-gold font-bold uppercase tracking-widest text-sm">Nuestra Identidad</span>
          <h1 className="font-display text-4xl md:text-5xl text-kingdom-navy mt-2">Quiénes Somos</h1>
          <div className="h-1 w-24 bg-kingdom-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          <section className="bg-white p-8 md:p-12 shadow-sm border-l-4 border-kingdom-gold animate-fade-in-up" style={{ animationDelay: '150ms' }}>
             <h2 className="font-serif text-2xl text-kingdom-navy mb-4">Nuestra Historia</h2>
             <p className="text-gray-600 leading-relaxed">
               El Ministerio Evangelístico Hombres del Reino nació en el corazón de Dios con el propósito de levantar una generación de creyentes comprometidos con la verdad bíblica. Bajo la cobertura del Concilio Embajada de Cristo Internacional, hemos trabajado incansablemente llevando el mensaje de salvación a las calles, las familias y las naciones.
             </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-kingdom-navy p-8 text-white rounded-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-display text-2xl text-kingdom-gold mb-4">Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                Predicar el evangelio de Jesucristo a toda criatura, discipular a los creyentes en la sana doctrina y enviar obreros a la mies para la expansión del Reino de Dios.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-sm animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <h3 className="font-display text-2xl text-kingdom-navy mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser un ministerio de referencia espiritual, caracterizado por la manifestación del poder de Dios, la santidad y el amor por las almas perdidas.
              </p>
            </div>
          </div>

          <section className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="font-serif text-3xl text-kingdom-navy mb-10">Valores Fundamentales</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {['Santidad', 'Amor', 'Servicio', 'Excelencia'].map((val) => (
                 <div key={val} className="p-6 bg-white shadow-sm border-b-2 border-kingdom-gold hover:shadow-md transition-shadow">
                   <span className="font-display text-lg text-kingdom-navy">{val}</span>
                 </div>
               ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- MINISTRIES PAGE ---
export const Ministries: React.FC = () => {
  const ministries: Ministry[] = [
    { id: '1', name: 'Evangelismo', description: 'Llevando las buenas nuevas a las calles y comunidades.', image: 'https://picsum.photos/400/300?random=2' },
    { id: '2', name: 'Damas del Reino', description: 'Mujeres virtuosas edificando sus hogares y la iglesia.', image: 'https://picsum.photos/400/300?random=3' },
    { id: '3', name: 'Generación de Fuego', description: 'Jóvenes apasionados por Jesús y su palabra.', image: 'https://picsum.photos/400/300?random=4' },
    { id: '4', name: 'Escuela Dominical', description: 'Instruyendo al niño en su camino desde temprana edad.', image: 'https://picsum.photos/400/300?random=5' },
    { id: '5', name: 'Intercesión', description: 'Columna vertebral espiritual que sostiene la obra.', image: 'https://picsum.photos/400/300?random=6' },
    { id: '6', name: 'Caballeros', description: 'Hombres de valor, sacerdotes de sus hogares.', image: 'https://picsum.photos/400/300?random=7' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-16 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-kingdom-gold font-bold uppercase tracking-widest text-sm block mb-2">Áreas de Servicio</span>
          <h1 className="font-display text-4xl md:text-5xl text-kingdom-navy leading-tight py-2">Nuestros Ministerios</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Hay diversidad de dones, pero el Espíritu es el mismo. Conoce las áreas donde servimos al Señor.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((min, index) => (
            <div key={min.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 200}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={min.image} alt={min.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-kingdom-navy/20 group-hover:bg-kingdom-navy/0 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-kingdom-navy font-bold mb-2">{min.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{min.description}</p>
                <button className="text-kingdom-gold font-bold text-xs uppercase tracking-widest hover:text-kingdom-navy transition-colors">Leer Más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SERMONS / LIVE PAGE ---
export const LiveAndSermons: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-12 md:pt-40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Live Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6 animate-pulse">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="uppercase tracking-widest text-sm font-bold text-red-500">Transmisión en Vivo</span>
          </div>
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center relative group">
             {/* Placeholder for iframe */}
             <div className="text-center">
                <Play className="w-20 h-20 text-white/50 group-hover:text-kingdom-gold transition-colors mx-auto mb-4" />
                <p className="text-gray-400">Esperando señal de transmisión...</p>
                <p className="text-xs text-gray-600 mt-2">Domingos 10:00 AM | Miércoles 7:00 PM</p>
             </div>
          </div>
        </section>

        {/* Sermons Archive */}
        <div className="border-t border-gray-800 pt-16">
          <h2 className="font-display text-3xl mb-8 text-kingdom-gold animate-fade-in-up" style={{ animationDelay: '200ms' }}>Predicaciones Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3, 4, 5, 6].map((i) => (
               <div key={i} className="bg-slate-800 rounded-sm overflow-hidden hover:bg-slate-700 transition-colors group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 100 + 300}ms` }}>
                 <div className="relative aspect-video bg-gray-900">
                    <img src={`https://picsum.photos/400/225?random=${i+10}`} alt="Sermon Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                       <Play className="text-white fill-current" />
                    </div>
                 </div>
                 <div className="p-4">
                    <span className="text-xs text-kingdom-gold uppercase font-bold">Serie: Fe Inquebrantable</span>
                    <h3 className="font-serif text-lg mt-1 mb-2">El Poder de la Oración {i}</h3>
                    <p className="text-xs text-gray-400">Pastor Principal • 12 Oct 2023</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- GIVING PAGE ---
export const Giving: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-12 md:pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-4xl text-kingdom-navy">Siembra en el Reino</h1>
          <p className="mt-6 text-xl text-gray-600 italic font-serif">"Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."</p>
          <p className="mt-2 text-kingdom-gold font-bold uppercase text-sm tracking-widest">2 Corintios 9:7</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-kingdom-navy p-6 text-white text-center">
            <h2 className="font-serif text-2xl">Métodos de Siembra</h2>
            <p className="text-sm text-gray-300 mt-2">Transferencias seguras y directas</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-8">
            {/* Bank Transfer */}
            <div className="flex flex-col md:flex-row items-center border p-6 rounded-lg hover:border-kingdom-gold transition-colors">
               <div className="p-4 bg-gray-100 rounded-full mb-4 md:mb-0 md:mr-6 text-kingdom-navy">
                 <CreditCard size={32} />
               </div>
               <div className="text-center md:text-left flex-1">
                 <h3 className="font-bold text-lg text-kingdom-navy uppercase">Cuenta Bancaria</h3>
                 <p className="text-gray-600 text-sm">Banco General</p>
                 <p className="font-mono text-xl md:text-2xl text-slate-800 my-2 select-all">04-12-34-567890-1</p>
                 <p className="text-gray-500 text-xs uppercase">Cuenta Corriente | Ministerio Hombres del Reino</p>
               </div>
            </div>

            {/* Mobile Payment */}
            <div className="flex flex-col md:flex-row items-center border p-6 rounded-lg hover:border-kingdom-gold transition-colors">
               <div className="p-4 bg-gray-100 rounded-full mb-4 md:mb-0 md:mr-6 text-kingdom-navy">
                 <Smartphone size={32} />
               </div>
               <div className="text-center md:text-left flex-1">
                 <h3 className="font-bold text-lg text-kingdom-navy uppercase">Yappy / Banca Móvil</h3>
                 <p className="text-gray-600 text-sm">Búscanos en el directorio como:</p>
                 <p className="font-bold text-xl text-kingdom-gold my-2">@HombresDelReino</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-bold text-kingdom-navy mb-4">Transparencia y Mayordomía</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Agradecemos profundamente tu generosidad. Cada semilla sembrada es administrada con temor de Dios para el avance del evangelio, misiones y ayuda social. Si necesitas recibo deducible de impuestos, por favor contáctanos.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- EVENTS PAGE ---
export const Events: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-12 md:pt-40">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <span className="text-kingdom-gold font-bold uppercase text-xs tracking-widest">Calendario</span>
                    <h1 className="font-display text-4xl text-kingdom-navy mt-2">Próximos Eventos</h1>
                </div>

                <div className="space-y-6">
                    {[1, 2, 3].map((item, index) => (
                        <div key={item} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                             <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 relative">
                                <img src={`https://picsum.photos/600/400?random=${item+20}`} alt="Evento" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-kingdom-gold text-kingdom-navy px-3 py-1 text-center rounded-sm font-bold shadow-lg">
                                    <span className="block text-xl">15</span>
                                    <span className="block text-xs uppercase">NOV</span>
                                </div>
                             </div>
                             <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="text-kingdom-gold text-xs font-bold uppercase tracking-wide">Congreso</span>
                                    <h3 className="font-serif text-2xl text-kingdom-navy font-bold mt-1">Avivamiento {2023 + item}</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center"><Clock size={16} className="mr-2 text-gray-400"/> 7:00 PM - 9:30 PM</div>
                                    <div className="flex items-center"><MapPin size={16} className="mr-2 text-gray-400"/> Auditorio Principal Embajada de Cristo</div>
                                </div>
                                <button className="w-fit text-kingdom-navy border-b-2 border-kingdom-gold pb-1 font-bold hover:text-kingdom-gold transition-colors text-sm uppercase">Más Información</button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- CONTACT PAGE ---
export const Contact: React.FC = () => {
    return (
      <div className="bg-slate-50 min-h-screen pt-32 pb-12 md:pt-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="font-display text-4xl text-kingdom-navy">Contáctanos</h1>
            <p className="mt-4 text-gray-600">Estamos aquí para servirte. Envíanos tus peticiones de oración o consultas.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
             <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-kingdom-navy text-white flex flex-col justify-center">
                    <h3 className="font-serif text-2xl mb-6">Información</h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                           <MapPin className="text-kingdom-gold mt-1" />
                           <p className="text-sm text-gray-300">Av. Principal, Edificio Embajada de Cristo, Ciudad de Panamá.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Smartphone className="text-kingdom-gold" />
                           <p className="text-sm text-gray-300">+507 6000-0000</p>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Clock className="text-kingdom-gold" />
                           <div>
                               <p className="text-sm text-gray-300 font-bold">Horario de Oficina</p>
                               <p className="text-xs text-gray-400">Lun - Vie: 8:00 AM - 5:00 PM</p>
                           </div>
                        </div>
                    </div>
                </div>
                
                <div className="p-8 md:p-12">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre Completo</label>
                            <input type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:border-kingdom-gold focus:ring-1 focus:ring-kingdom-gold outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Correo Electrónico</label>
                            <input type="email" className="w-full border border-gray-300 p-3 rounded-sm focus:border-kingdom-gold focus:ring-1 focus:ring-kingdom-gold outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mensaje / Petición</label>
                            <textarea rows={4} className="w-full border border-gray-300 p-3 rounded-sm focus:border-kingdom-gold focus:ring-1 focus:ring-kingdom-gold outline-none transition-colors"></textarea>
                        </div>
                        <button className="w-full bg-kingdom-gold text-kingdom-navy font-bold uppercase py-3 rounded-sm hover:bg-yellow-600 transition-colors shadow-md">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  };