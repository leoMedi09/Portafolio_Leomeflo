// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { userProfile } from '../data/user';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portafolio', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo dinámico */}
        <a href="#" className="text-xl font-bold text-white tracking-tighter hover:text-blue-400 transition">
          {userProfile.name.split(' ')[0].toUpperCase()}
          <span className="text-blue-500">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition hover:tracking-wide">
              {link.name.toUpperCase()}
            </a>
          ))}
          <a href={userProfile.social.email} className="px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition">
            Contactar
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-gray-800 py-4">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;