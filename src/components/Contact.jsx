import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { whatsappLink } from '../utils/whatsapp';

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-elegant-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-elegant-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Contacto
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              ¿Listo para <br />
              <span className="text-gradient-gold italic">Renovar</span> tu Hogar?
            </h2>
            <p className="text-gray-400 font-light text-lg mb-12 leading-relaxed max-w-2xl">
              Escríbenos por WhatsApp y recibe asesoría para elegir cortinas, persianas o blackout a la medida de tu espacio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              <a
                href={whatsappLink('Hola, los contacto desde su página web. Quiero una asesoría para cortinas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-green-600 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
              <a
                href="tel:+573229064201"
                className="flex items-center justify-center gap-3 border border-white/15 text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:border-elegant-gold hover:text-elegant-gold transition-all"
              >
                <FaPhoneAlt />
                Llamar
              </a>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-elegant-wine/20 flex items-center justify-center text-elegant-gold text-2xl group-hover:bg-elegant-gold group-hover:text-white transition-all">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Teléfono</span>
                  <a href="tel:+573229064201" className="text-xl font-medium block hover:text-elegant-gold">322 906 4201</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-elegant-wine/20 flex items-center justify-center text-elegant-gold text-2xl group-hover:bg-elegant-gold group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</span>
                  <a href="mailto:mfna24brayan@gmail.com" className="text-xl font-medium hover:text-elegant-gold break-all">mfna24brayan@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-elegant-wine/20 flex items-center justify-center text-elegant-gold text-2xl group-hover:bg-elegant-gold group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Ubicaciones</span>
                  <div className="space-y-1">
                    <a
                      href="https://maps.google.com/?q=Milagro+Transversal+58+15-187+Cartagena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium block hover:text-elegant-gold"
                    >
                      CARTAGENA: Milagro Trv. 58 # 15 - 187
                    </a>
                    <a
                      href="https://maps.google.com/?q=Arroyo+de+Piedra+Cartagena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 block hover:text-elegant-gold"
                    >
                      ARROYO DE PIEDRA: Cl Principal Manz. L Lote 137
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(74,4,4,0.35),transparent_40%)]" />
            <div className="relative">
              <span className="text-elegant-gold text-xs uppercase tracking-[0.35em] font-bold">Atención directa</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold mt-5 mb-6">
                Asesoría para medir, elegir e instalar.
              </h3>
              <p className="text-gray-400 leading-relaxed mb-10">
                Cuéntanos qué ambiente quieres transformar y te orientamos con telas, sistemas y acabados según tu presupuesto.
              </p>

              <div className="space-y-4 mb-10">
                {['Cortinas a medida', 'Persianas modernas', 'Blackout y sheer elegance', 'Instalación personalizada'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm uppercase tracking-widest text-gray-300">{item}</span>
                    <span className="text-elegant-gold">+</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink('Hola, quiero agendar una asesoría para cortinas con Elegant Corti.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-elegant-gold px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-elegant-black hover:bg-elegant-gold-light transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                Agendar asesoría
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
