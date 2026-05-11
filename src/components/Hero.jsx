import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { whatsappLink } from '../utils/whatsapp';
import { publicAsset } from '../utils/assets';

const titleLine = 'Transformamos tus';
const titleHighlight = 'Espacios';
const titleEnd = ' en Arte';
const fullTitle = `${titleLine}\n${titleHighlight}${titleEnd}`;

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedTitle(fullTitle.slice(0, index));

      if (index >= fullTitle.length) {
        window.clearInterval(interval);
      }
    }, 70);

    return () => window.clearInterval(interval);
  }, []);

  const firstLine = typedTitle.split('\n')[0] || '';
  const secondLine = typedTitle.includes('\n') ? typedTitle.split('\n')[1] || '' : '';
  const highlightedText = secondLine.slice(0, titleHighlight.length);
  const endText = secondLine.slice(titleHighlight.length);
  const isTyping = typedTitle.length < fullTitle.length;

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${publicAsset('hero_curtains_1778263576711.png')}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-black via-elegant-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col mb-6">
              <span className="text-elegant-gold uppercase tracking-[0.4em] text-xs font-bold border-b border-elegant-gold pb-2 w-fit">
                Fábrica de Cortinas
              </span>
              <span className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-medium mt-2">
                Lujo & Exclusividad
              </span>
            </div>
            <h1
              className="min-h-[8.5rem] md:min-h-[11rem] lg:min-h-[15rem] text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight mb-8"
              aria-label="Transformamos tus Espacios en Arte"
            >
              <span>{firstLine}</span>
              <br />
              <span className="text-gradient-gold">{highlightedText}</span>
              <span>{endText}</span>
              <span
                className={`ml-1 inline-block w-[0.08em] h-[0.9em] translate-y-[0.08em] bg-elegant-gold ${
                  isTyping ? 'animate-pulse' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl">
              Diseño de cortinas y persianas a medida que combinan elegancia,
              funcionalidad y sofisticación para los hogares más exigentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#catalogo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-elegant-wine text-white px-10 py-5 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(74,4,4,0.4)] hover:shadow-[0_0_30px_rgba(74,4,4,0.6)] transition-all duration-300"
              >
                Ver Catálogo
                <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a
                href={whatsappLink('Hola, vi su página y me gustaría más información sobre sus cortinas.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 border border-white/20 hover:border-elegant-gold px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm backdrop-blur-sm transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl text-green-500" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.5em]">Deslizar</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-elegant-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
