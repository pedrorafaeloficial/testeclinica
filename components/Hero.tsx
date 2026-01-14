import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle2, TrendingUp, Users, Activity } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';

const data = [
  { name: 'Seg', uv: 40 },
  { name: 'Ter', uv: 70 },
  { name: 'Qua', uv: 50 },
  { name: 'Qui', uv: 90 },
  { name: 'Sex', uv: 65 },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-accent/20 rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-1.5 rounded-full shadow-sm mb-6 animate-fade-in-up">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" fill="currentColor" />
          <span className="text-xs font-semibold text-green-800 uppercase tracking-wide">Tecnologia Global em Oftalmologia</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 tracking-tight leading-[1.1]">
          Sua Visão é a Nossa <br className="hidden md:block" />
          <span className="relative">
            Prioridade Absoluta
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Perfeito para pacientes que buscam excelência. Simplificamos sua saúde ocular com diagnósticos precisos e tratamentos avançados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-brand-dark/20 group">
            Agendar Exame
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all hover:border-gray-300">
            <PlayCircle className="w-5 h-5 text-gray-900" />
            Ver Tour Virtual
          </button>
        </div>
      </div>

      {/* Hero Dashboard Mockup - The "Wow" Factor */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Exam Stats */}
          <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between h-64 hover:translate-y-[-5px] transition-transform duration-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-700">Acuidade Visual</h3>
                <p className="text-xs text-gray-400">Progresso do paciente</p>
              </div>
              <button className="text-gray-300 hover:text-gray-600">
                <Activity className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-auto">
               <div className="flex items-end gap-2 mb-2">
                 <span className="text-4xl font-bold text-brand-dark">20/20</span>
                 <span className="text-sm text-green-600 font-medium mb-1.5 bg-green-50 px-2 py-0.5 rounded-full">+15% Melhora</span>
               </div>
               <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-accent w-[95%] rounded-full"></div>
               </div>
               <div className="mt-2 text-xs text-gray-400 flex justify-between">
                 <span>OD (Direito)</span>
                 <span>OE (Esquerdo)</span>
               </div>
            </div>
          </div>

          {/* Card 2: Main Balance / Patients */}
          <div className="bg-brand-dark p-6 rounded-3xl shadow-xl shadow-gray-200/50 text-white flex flex-col justify-between h-64 md:-mt-8 hover:translate-y-[-5px] transition-transform duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-32 h-32" />
            </div>
            
            <div className="flex justify-between items-center z-10">
              <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
                Resumo Mensal
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-bold">
                ✓
              </div>
            </div>

            <div className="z-10">
              <h3 className="text-gray-300 text-sm mb-1">Pacientes Atendidos</h3>
              <p className="text-4xl font-bold mb-6">1,284</p>
              
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-300">Próxima Cirurgia</p>
                  <p className="text-sm font-semibold">Dr. Ricardo - 14:00</p>
                </div>
                <div className="ml-auto bg-brand-accent text-brand-dark text-xs font-bold px-2 py-1 rounded-lg">
                  Confirmado
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Spending/Health Limits */}
          <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-64 hover:translate-y-[-5px] transition-transform duration-500">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-700">Saúde da Retina</h3>
                <div className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">Estável</div>
             </div>

             <div className="flex-1 w-full h-full min-h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                    <Bar dataKey="uv" radius={[4, 4, 4, 4]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 3 ? '#a3e635' : '#e2e8f0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
               <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
               <span>Média da semana</span>
               <div className="w-2 h-2 rounded-full bg-gray-300 ml-2"></div>
               <span>Anterior</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;