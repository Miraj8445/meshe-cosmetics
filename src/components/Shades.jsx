import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, getWhatsAppOrderUrl } from '../config/siteConfig';
import { ArrowUpRight, Plus, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Shades({ onAddToCart, onQuickOrder }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeShadeId, setActiveShadeId] = useState(PRODUCTS[0].id);
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Sequential GSAP staggered reveal on scroll
      const cards = gsap.utils.toArray('.editorial-product-card');

      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (e, index) => {
    const card = e.currentTarget;
    const img = card.querySelector('.product-bottle-img');
    const swatch = card.querySelector('.card-swatch-circle');
    const title = card.querySelector('.card-shade-title');
    const cta = card.querySelector('.card-hover-cta');

    gsap.to(img, { scale: 1.06, y: -6, duration: 0.45, ease: 'power2.out' });
    gsap.to(swatch, { scale: 1.15, duration: 0.35, ease: 'back.out(2)' });
    gsap.to(title, { x: 3, duration: 0.3, ease: 'power2.out' });
    if (cta) gsap.to(cta, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.product-bottle-img');
    const swatch = card.querySelector('.card-swatch-circle');
    const title = card.querySelector('.card-shade-title');
    const cta = card.querySelector('.card-hover-cta');

    gsap.to(img, { scale: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    gsap.to(swatch, { scale: 1, duration: 0.35, ease: 'power2.out' });
    gsap.to(title, { x: 0, duration: 0.3, ease: 'power2.out' });
    if (cta) gsap.to(cta, { opacity: 0.9, y: 0, duration: 0.35, ease: 'power2.out' });
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section
      ref={sectionRef}
      id="shades"
      className="section"
      style={{
        backgroundColor: 'var(--bg-champagne)',
        transition: 'background-color 0.6s ease',
      }}
    >
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <span className="section-tag">Curated Palette</span>
          <h2 className="section-title">Find Your Shade</h2>
          <p className="section-subtitle">
            “Five moods. Five shades. One MESHE.”
          </p>
        </div>

        {/* Interactive Shade Mood Selector Swatches */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          {PRODUCTS.map((prod) => {
            const isActive = activeShadeId === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveShadeId(prod.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
                  border: isActive
                    ? '1.5px solid var(--accent-wine)'
                    : '1px solid rgba(115, 26, 41, 0.08)',
                  boxShadow: isActive
                    ? '0 6px 20px rgba(115, 26, 41, 0.12)'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: prod.colorHex,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                    display: 'inline-block',
                    transform: isActive ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.25s ease',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-wine)' : 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {prod.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Product Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="shades-grid"
        >
          {PRODUCTS.map((product, index) => {
            const isHighlighted = activeShadeId === product.id;
            const isJustAdded = addedItem === product.id;

            return (
              <div
                key={product.id}
                className="editorial-product-card"
                onMouseEnter={(e) => handleCardMouseEnter(e, index)}
                onMouseLeave={handleCardMouseLeave}
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isHighlighted
                    ? '0 20px 48px rgba(115, 26, 41, 0.12)'
                    : '0 10px 32px rgba(45, 20, 15, 0.05)',
                  border: isHighlighted
                    ? '1.5px solid rgba(115, 26, 41, 0.35)'
                    : '1px solid rgba(115, 26, 41, 0.06)',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* Top Badge & Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontStyle: 'italic',
                      color: 'var(--accent-wine)',
                      fontWeight: 600,
                    }}
                  >
                    {product.shadeNumber}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-wine)',
                      backgroundColor: 'rgba(115, 26, 41, 0.06)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Product Image Stage */}
                <div
                  style={{
                    position: 'relative',
                    height: '320px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0.5rem 0 1.5rem',
                    overflow: 'visible',
                  }}
                >
                  {/* Subtle Radial Aura Behind Bottle */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${product.colorHex}22 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                      zIndex: 0,
                    }}
                  />

                  {/* Isolated Bottle Image */}
                  <img
                    src={product.image}
                    alt={`${product.name} - MESHE Lipstick`}
                    className="product-bottle-img"
                    style={{
                      maxHeight: '290px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      position: 'relative',
                      zIndex: 1,
                      filter: 'drop-shadow(0 14px 24px rgba(45, 15, 20, 0.14))',
                      transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>

                {/* Product Meta & Descriptions */}
                <div>
                  
                  {/* Swatch & Undertone Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      className="card-swatch-circle"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: product.colorHex,
                        display: 'inline-block',
                        boxShadow: '0 3px 8px rgba(0,0,0,0.18)',
                        border: '2px solid #FFFFFF',
                        outline: `1.5px solid ${product.colorHex}`,
                        flexShrink: 0,
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {product.tone}
                      </div>
                    </div>
                  </div>

                  {/* Shade Name */}
                  <h3
                    className="card-shade-title"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      marginBottom: '1.5rem',
                      minHeight: '44px',
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Price & Action Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(115, 26, 41, 0.08)',
                      paddingTop: '1.25rem',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.65rem',
                          fontWeight: 600,
                          color: 'var(--accent-wine)',
                        }}
                      >
                        ₹{product.price}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          marginLeft: '0.35rem',
                          textDecoration: 'line-through',
                        }}
                      >
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {/* Add to Bag */}
                      <button
                        onClick={() => handleAdd(product)}
                        title="Add to order bag"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: isJustAdded ? '#2E7D32' : 'rgba(115, 26, 41, 0.06)',
                          color: isJustAdded ? '#FFFFFF' : 'var(--accent-wine)',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {isJustAdded ? <Check size={18} /> : <Plus size={18} />}
                      </button>

                      {/* Direct WhatsApp Order CTA */}
                      <a
                        href={getWhatsAppOrderUrl('shade', product.name, product.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary card-hover-cta"
                        style={{
                          padding: '0.65rem 1.15rem',
                          fontSize: '0.78rem',
                          gap: '0.4rem',
                        }}
                      >
                        <span>Order</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Driving to Collection */}
        <div
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              Can't choose just one?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Own the entire spectrum. Get all 5 signature shades for just <strong>₹1596</strong> (Save ₹399).
            </p>
          </div>

          <a
            href="#collection"
            className="btn btn-primary btn-shimmer"
            style={{ fontSize: '0.85rem', padding: '0.85rem 1.8rem' }}
          >
            Discover The Collection Offer
          </a>
        </div>

      </div>
    </section>
  );
}
