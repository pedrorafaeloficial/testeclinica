import React, { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg border border-white/20 rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-accent p-2 rounded-full">
            <Eye className="w-5 h-5 text-brand-dark" />
          </div>
          <span className="font-bold text-lg text-brand-dark tracking-tight">Clinica<span className="opacity-70">Regional</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:shadow-sm hover:text-brand-dark transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-brand-dark transition-colors">
            Login Paciente
          </button>
          <button className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Agendar Consulta
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-200">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 py-2 border-b border-gray-100 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-brand-dark text-white py-3 rounded-xl font-medium mt-2">
            Agendar Consulta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;