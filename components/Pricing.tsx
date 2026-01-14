import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos Transparentes</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Escolha o pacote ideal para o acompanhamento da saúde dos seus olhos. Sem surpresas.
          </p>

          <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 relative">
            <button 
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                period === 'monthly' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Individual
            </button>
            <button 
              onClick={() => setPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                period === 'yearly' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Familiar
            </button>
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-dark rounded-full transition-transform duration-300 ${
                period === 'yearly' ? 'translate-x-full' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-[2rem] transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-brand-dark text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-[2rem]">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                {plan.isPopular ? <Zap className="w-8 h-8 text-brand-accent mb-4" /> : <div className="w-8 h-8 mb-4 flex items-center justify-center bg-gray-100 rounded-lg"><Zap className="w-4 h-4 text-gray-500" /></div>}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/ {plan.period}</span>
                </div>
              </div>

              <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-colors ${
                plan.isPopular 
                  ? 'bg-brand-accent text-brand-dark hover:bg-lime-300' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.buttonText}
              </button>

              <div className="space-y-4">
                <p className={`text-sm font-medium ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>O que está incluído:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.isPopular ? 'bg-white/10 text-brand-accent' : 'bg-green-100 text-green-700'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.isPopular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;