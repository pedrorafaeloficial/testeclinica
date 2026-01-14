import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-accent p-2 rounded-full">
                <Eye className="w-5 h-5 text-brand-dark" />
              </div>
              <span className="font-bold text-lg text-brand-dark">Clinica<span className="opacity-70">Regional</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando vidas através de uma visão perfeita. Tecnologia e cuidado humano em um só lugar.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-dark">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-dark">Corpo Clínico</a></li>
              <li><a href="#" className="hover:text-brand-dark">Tratamentos</a></li>
              <li><a href="#" className="hover:text-brand-dark">Convênios</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-6">Exames</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-dark">Refração</a></li>
              <li><a href="#" className="hover:text-brand-dark">Topografia</a></li>
              <li><a href="#" className="hover:text-brand-dark">Tomografia (OCT)</a></li>
              <li><a href="#" className="hover:text-brand-dark">Campimetria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Receba dicas de saúde ocular.</p>
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-200">
              <input type="email" placeholder="Seu email" className="bg-transparent text-sm px-4 py-2 outline-none flex-1 w-full" />
              <button className="bg-brand-dark text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-400">
          <p>&copy; 2024 Clinica de Olhos Regional. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacidade</a>
            <a href="#" className="hover:text-gray-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;