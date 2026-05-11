import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { whatsappLink } from '../utils/whatsapp';
import { publicAsset } from '../utils/assets';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

const quoteHref = whatsappLink('Hola, quiero cotizar unas cortinas para mi hogar.');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="Ir al inicio de Elegant Corti"
        >
          <img src={publicAsset('logo.png')} alt="Elegant Corti Logo" className="h-12 md:h-16 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter group-hover:text-elegant-gold transition-colors">
              ELEGANT <span className="text-elegant-gold italic">CORTI</span>
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Fábrica de Cortinas</span>
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-medium hover:text-elegant-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-elegant-wine text-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold border border-elegant-wine hover:bg-transparent hover:border-elegant-gold hover:text-elegant-gold transition-all duration-500"
          >
            Cotizar Ahora
          </motion.a>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-white hover:text-elegant-gold transition-colors"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg uppercase tracking-widest block py-2 border-b border-white/5 hover:text-elegant-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={quoteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full bg-elegant-gold text-elegant-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
                >
                  Cotizar Ahora
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
