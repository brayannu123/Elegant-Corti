import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy loading components for performance
const Services = lazy(() => import('./components/Services'));
const Catalog = lazy(() => import('./components/Catalog'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-elegant-black selection:bg-elegant-gold/30 selection:text-elegant-gold-light">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-elegant-gold">Cargando...</div>}>
          <Services />
          <Catalog />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
