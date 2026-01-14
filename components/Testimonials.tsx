import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-lime-200 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Background Gradient similar to reference */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-lime-100 to-lime-300 opacity-50 z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          <div className="flex flex-col justify-center">
             <div className="bg-white/60 backdrop-blur-sm w-fit px-3 py-1.5 rounded-full flex items-center gap-2 mb-6">
               <div className="w-2 h-2 rounded-full bg-green-600"></div>
               <span className="text-xs font-bold text-green-900 uppercase">Depoimentos</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-6 leading-tight">
               O Que Nossos Pacientes Dizem
             </h2>
             <p className="text-green-900/70 text-lg mb-8 max-w-md">
               Nossa dedicação à sua visão se reflete nas histórias de quem confia em nós.
             </p>
             
             <button className="w-fit bg-green-950 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition-colors">
               Ver mais histórias <ArrowRight className="w-4 h-4" />
             </button>
          </div>

          <div className="space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg font-medium italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;