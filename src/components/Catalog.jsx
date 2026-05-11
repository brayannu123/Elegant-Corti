import React from 'react';
import { motion } from 'framer-motion';
import { whatsappLink } from '../utils/whatsapp';

const products = [
  { id: 1, name: 'Terciopelo Real', category: 'Seleccionado', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Seda Horizonte', category: 'Lujo', img: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Sheer Dorado', category: 'Elegante', img: 'https://images.unsplash.com/photo-1595814433015-e6f5cd69614e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Negro Obsidiana', category: 'Minimalista', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Lino Natural', category: 'Natural', img: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Vino Royal', category: 'Exclusivo', img: 'https://images.unsplash.com/photo-1595814433015-e6f5cd69614e?auto=format&fit=crop&q=80&w=600' },
];

const Catalog = () => {
  return (
    <section id="catalogo" className="py-32 bg-elegant-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-elegant-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Colección Exclusiva
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              Catálogo <span className="italic text-elegant-gold">A Medida</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light">
            Explora nuestra selección de telas importadas y sistemas automatizados diseñados para los gustos más refinados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={product.img}
                  alt={`Cortina ${product.name} de la colección ${product.category}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-elegant-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href={whatsappLink(`Hola, me interesa cotizar el producto: ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 bg-white text-elegant-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-elegant-gold hover:text-white whitespace-nowrap"
                >
                  Cotizar Producto
                </a>
              </div>
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-elegant-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-elegant-gold/60 font-bold">
                    {product.category}
                  </span>
                </div>
                <a
                  href={whatsappLink(`Hola, quiero recibir información del producto: ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-elegant-gold font-bold text-xs uppercase tracking-widest border-b border-elegant-gold/40 hover:border-elegant-gold whitespace-nowrap"
                >
                  Consultar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="#galeria" className="border-b-2 border-elegant-gold pb-2 text-sm uppercase tracking-[0.3em] font-bold hover:text-elegant-gold transition-colors">
            Ver colección completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
