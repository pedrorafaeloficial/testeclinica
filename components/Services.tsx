import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Activity, Zap } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Exames de Alta Precisão',
    description: 'Utilizamos tomografia de coerência óptica (OCT) e mapeamento de retina digital para diagnósticos exatos.',
    icon: Activity
  },
  {
    id: 2,
    title: 'Resultados Online Rápidos',
    description: 'Acesse seus laudos, imagens e receitas através do nosso portal do paciente seguro e intuitivo.',
    icon: FileText
  },
  {
    id: 3,
    title: 'Cirurgias Minimamente Invasivas',
    description: 'Tecnologia laser para recuperação em tempo recorde e menor desconforto pós-operatório.',
    icon: Zap
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="bg-gray-100 w-fit px-3 py-1 rounded-full text-gray-600 text-xs font-bold uppercase tracking-wide mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
            Soluções Completas para sua Saúde Ocular
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Accordion Left */}
          <div className="space-y-4">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`border rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  activeId === service.id 
                    ? 'bg-brand-dark border-brand-dark text-white shadow-xl scale-[1.02]' 
                    : 'bg-white border-gray-200 text-gray-900 hover:border-brand-dark/30'
                }`}
                onClick={() => setActiveId(service.id)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${activeId === service.id ? 'bg-white/10' : 'bg-gray-100'}`}>
                      <service.icon className={`w-5 h-5 ${activeId === service.id ? 'text-brand-accent' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                  {activeId === service.id ? <ChevronUp /> : <ChevronDown />}
                </div>
                
                <div className={`px-6 pb-6 pt-0 text-sm leading-relaxed opacity-80 ${activeId === service.id ? 'block' : 'hidden'}`}>
                  {service.description}
                </div>
              </div>
            ))}
          </div>

          {/* Visualization Right */}
          <div className="bg-gray-50 rounded-[2.5rem] p-8 h-full min-h-[500px] flex flex-col justify-center items-center relative overflow-hidden border border-gray-100">
            {/* Abstract Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-xl p-6 animate-fade-in-up">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-gray-800">Visão Geral</h4>
                <select className="bg-gray-100 border-none text-xs rounded-lg px-2 py-1 outline-none">
                  <option>Última Semana</option>
                </select>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Exames Realizados</span>
                    <span className="font-bold">124</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-dark w-[75%] rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Satisfação</span>
                    <span className="font-bold">4.9/5.0</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent w-[92%] rounded-full"></div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <div className="flex-1 bg-green-50 p-4 rounded-2xl text-center">
                    <p className="text-2xl font-bold text-green-700">24h</p>
                    <p className="text-[10px] uppercase font-bold text-green-600 mt-1">Tempo Médio</p>
                  </div>
                   <div className="flex-1 bg-blue-50 p-4 rounded-2xl text-center">
                    <p className="text-2xl font-bold text-blue-700">+2k</p>
                    <p className="text-[10px] uppercase font-bold text-blue-600 mt-1">Laudos/Mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;