import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../utils/whatsapp';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={whatsappLink('Hola, los contacto desde su página web.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(34,197,94,0.4)] cursor-pointer group"
    >
      <FaWhatsapp />
      <span className="absolute right-full mr-4 bg-white text-elegant-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        ¿Necesitas ayuda?
      </span>
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
