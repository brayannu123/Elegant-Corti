import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineColorSwatch, HiOutlineHome, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi';

const services = [
  {
    title: 'Cortinas Blackout',
    description: 'Privacidad total y bloqueo de luz para un descanso perfecto.',
    icon: <HiOutlineShieldCheck />,
    image: '/blackout_curtains_1778263646696.png',
  },
  {
    title: 'Sheer Elegance',
    description: 'El equilibrio ideal entre iluminación natural y privacidad.',
    icon: <HiOutlineSparkles />,
    image: '/sheer_elegance_curtains_1778263662180.png',
  },
  {
    title: 'Persianas Modernas',
    description: 'Diseños minimalistas y funcionales para oficinas y hogares.',
    icon: <HiOutlineColorSwatch />,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Instalación Especializada',
    description: 'Personal experto garantizando acabados impecables.',
    icon: <HiOutlineHome />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-elegant-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-elegant-wine/10 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-elegant-gold/5 blur-[120px] rounded-full translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-elegant-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Nuestra Propuesta
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Servicios <span className="italic text-elegant-gold">Especializados</span>
          </motion.h2>
          <div className="w-24 h-1 bg-elegant-wine mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-black via-elegant-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-4xl text-elegant-gold mb-6 opacity-80 group-hover:scale-110 transition-transform origin-left duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-elegant-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Ver más</span>
                  <div className="w-8 h-[1px] bg-elegant-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
