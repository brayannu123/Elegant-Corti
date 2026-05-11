import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    alt: 'Cortinas modernas en sala residencial elegante',
  },
  {
    src: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?auto=format&fit=crop&q=80&w=800',
    alt: 'Cortinas claras con iluminación natural en habitación',
  },
  {
    src: 'https://images.unsplash.com/photo-1595814433015-e6f5cd69614e?auto=format&fit=crop&q=80&w=800',
    alt: 'Cortinas elegantes en ambiente residencial sofisticado',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    alt: 'Sala moderna con cortinas de piso a techo',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    alt: 'Cortinas decorativas en espacio social contemporáneo',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800',
    alt: 'Proyecto residencial con cortinas elegantes a medida',
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-32 bg-elegant-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-elegant-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Nuestra Galería
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Espacios que <span className="italic text-elegant-gold">Inspiran</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Echa un vistazo a nuestros proyectos más recientes donde el diseño y la funcionalidad se encuentran.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-elegant-wine/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl border border-white/30">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
