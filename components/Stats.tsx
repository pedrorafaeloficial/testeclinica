import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, ShieldCheck, Microscope, UserCheck, Star } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Title & Main CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <div className="bg-green-100 w-fit px-3 py-1 rounded-full text-green-800 text-xs font-bold uppercase tracking-wide">
              Resultados Comprovados
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Excelência Clínica em Números
            </h2>
            <p className="text-gray-500 text-lg">
              Acompanhamos cada detalhe da sua recuperação com métricas precisas e tecnologia de ponta.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
               <div>
                 <p className="text-3xl font-bold text-brand-dark flex items-center gap-1">
                   50% <ArrowUpRight className="w-5 h-5 text-brand-accent" />
                 </p>
                 <p className="text-sm text-gray-500">Recuperação Rápida</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-brand-dark flex items-center gap-1">
                   99% <ArrowUpRight className="w-5 h-5 text-brand-accent" />
                 </p>
                 <p className="text-sm text-gray-500">Cirurgias com Sucesso</p>
               </div>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[160px]">
            
            {/* Main Graph Card */}
            <div className="md:col-span-2 row-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Satisfação dos Pacientes</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">98.5%</h3>
                </div>
                <div className="bg-gray-50 p-2 rounded-xl">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#15803d" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#15803d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                    />
                    <Area type="monotone" dataKey="value" stroke="#15803d" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Dark Card */}
            <div className="bg-brand-dark rounded-[2rem] p-6 text-white flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <div className="relative z-10">
                 <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <UserCheck className="w-5 h-5 text-brand-accent" />
                 </div>
                 <h4 className="text-2xl font-bold">10k+</h4>
                 <p className="text-sm text-gray-400">Pacientes Ativos</p>
               </div>
               <div className="relative z-10 mt-2">
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent w-3/4 rounded-full"></div>
                 </div>
               </div>
            </div>

            {/* Small White Card 1 */}
            <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-center items-start hover:shadow-md transition-shadow">
               <div className="bg-blue-50 p-3 rounded-2xl mb-3">
                 <ShieldCheck className="w-6 h-6 text-blue-600" />
               </div>
               <h4 className="font-bold text-gray-900">Segurança Total</h4>
               <p className="text-xs text-gray-500 mt-1">Protocolos ISO 9001</p>
            </div>

            {/* Small White Card 2 */}
            <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-center items-start hover:shadow-md transition-shadow">
               <div className="bg-purple-50 p-3 rounded-2xl mb-3">
                 <Microscope className="w-6 h-6 text-purple-600" />
               </div>
               <h4 className="font-bold text-gray-900">Alta Precisão</h4>
               <p className="text-xs text-gray-500 mt-1">Laser Femtosegundo</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;