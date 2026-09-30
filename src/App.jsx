import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shades from './components/Shades';
import Collection from './components/Collection';
import WhyMeshe from './components/WhyMeshe';
import About from './components/About';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderDrawer from './components/OrderDrawer';
import StickyMobileCta from './components/StickyMobileCta';
import { COLLECTION_OFFER } from './config/siteConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [bagItems, setBagItems] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for top progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Refresh ScrollTrigger once images/fonts are settled
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  // Smooth scroll helpers
  const scrollToShades = () => {
    const el = document.getElementById('shades');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleAddCollectionToCart = () => {
    setBagItems((prev) => {
      const collItem = {
        id: 'collection-pack',
        name: 'The Complete MESHE Collection (All 5 Shades)',
        price: COLLECTION_OFFER.price,
        image: COLLECTION_OFFER.image,
        tone: '5 Full-Size Lipsticks + Velvet Pouch',
        quantity: 1,
      };
      const existing = prev.find((item) => item.id === collItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === collItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, collItem];
    });
    setIsBagOpen(true);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setBagItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setBagItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Scroll Progress Bar at very top */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Sticky Navigation Bar */}
      <Navbar
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={totalBagCount}
      />

      {/* Main Page Flow */}
      <main id="main-content" style={{ flex: 1 }}>
        {/* Cinematic Master Hero */}
        <Hero
          onExploreShades={scrollToShades}
          onExploreCollection={scrollToCollection}
        />

        {/* Section 1 — 5 Shades */}
        <Shades
          onAddToCart={handleAddToCart}
          onQuickOrder={() => setIsBagOpen(true)}
        />

        {/* Section 2 — 5-Shade Collection (Pinned Experience) */}
        <Collection
          onGetCollection={handleAddCollectionToCart}
        />

        {/* Section 3 — Why MESHE */}
        <WhyMeshe />

        {/* Section 4 — About MESHE */}
        <About />

        {/* Section 5 — Instagram / Real World */}
        <Instagram />

        {/* Section 6 — Contact / Order Hub */}
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Slide-out Order Bag Drawer */}
      <OrderDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearBag={() => setBagItems([])}
      />

      {/* Floating Mobile Bottom CTA */}
      <StickyMobileCta
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={totalBagCount}
      />

    </div>
  );
}
