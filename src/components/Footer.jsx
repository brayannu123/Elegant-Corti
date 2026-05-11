import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elegant-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold tracking-tighter mb-8">
              ELEGANT <span className="text-elegant-gold italic">CORTI</span>
            </h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Expertos en diseño e instalación de cortinas y persianas a medida.
              Creamos ambientes elegantes, funcionales y hechos a la medida.
            </p>
            <a
              href={whatsappLink('Hola, quiero agendar una asesoría con Elegant Corti.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a Elegant Corti por WhatsApp"
              className="inline-flex items-center gap-3 rounded-full border border-green-500/40 px-5 py-3 text-sm font-bold uppercase tracking-widest text-green-500 hover:bg-green-500 hover:text-white transition-all"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-elegant-gold">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-elegant-gold">Atención</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 9:00 AM - 1:00 PM</li>
              <li><a href="mailto:mfna24brayan@gmail.com" className="hover:text-white">mfna24brayan@gmail.com</a></li>
              <li><a href="tel:+573229064201" className="hover:text-white">+57 322 906 4201</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-elegant-gold">Asesoría</h4>
            <p className="text-sm text-gray-500 mb-8 font-light leading-relaxed">
              ¿Listo para transformar tu hogar? Agenda una asesoría y cuéntanos qué tipo de cortina quieres instalar.
            </p>
            <a
              href={whatsappLink('Hola, quiero agendar una asesoría gratis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-elegant-gold text-elegant-black px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-elegant-gold-light transition-colors"
            >
              <FaWhatsapp />
              Agendar asesoría
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {currentYear} Elegant Corti. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <a href="#catalogo" className="hover:text-white">Catálogo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
