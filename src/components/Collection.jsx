import React, { useEffect, useRef, useState } from 'react';
import { COLLECTION_OFFER, PRODUCTS, getWhatsAppOrderUrl } from '../config/siteConfig';
import { Sparkles, CheckCircle2, Gift, Truck, ArrowRight, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Collection({ onGetCollection }) {
  const [activeView, setActiveView] = useState('bottles'); // 'bottles' | 'boxes' | 'swatches'
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);
  const bottlesRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop Animation (>= 993px)
    mm.add('(min-width: 993px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Background color transitions from cream -> deep warm earth brown
      tl.to(
        pinSectionRef.current,
        {
          backgroundColor: '#38241F',
          duration: 1.5,
          ease: 'power1.inOut',
        },
        0
      );

      tl.to(
        '.coll-text-switch',
        {
          color: '#FAF4EE',
          duration: 1.2,
        },
        0
      );

      tl.to(
        '.coll-subtext-switch',
        {
          color: '#E8D7C8',
          duration: 1.2,
        },
        0
      );

      const initialOffsets = [
        { x: -160, y: -60, rotate: -10, scale: 0.9 },
        { x: -80, y: 70, rotate: -5, scale: 0.93 },
        { x: 0, y: -90, rotate: 2, scale: 0.95 },
        { x: 80, y: 80, rotate: 6, scale: 0.93 },
        { x: 160, y: -50, rotate: 10, scale: 0.9 },
      ];

      bottlesRef.current.forEach((bottle, i) => {
        if (!bottle) return;
        const off = initialOffsets[i];
        gsap.set(bottle, {
          x: off.x,
          y: off.y,
          rotate: off.rotate,
          scale: off.scale,
          opacity: 0.8,
        });

        tl.to(
          bottle,
          {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
          },
          0.3 + i * 0.08
        );
      });

      tl.fromTo(
        '.coll-headline-reveal',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        0.8
      );

      tl.fromTo(
        '.coll-price-badge',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
        1.1
      );

      tl.fromTo(
        ['.coll-perks-list', '.coll-cta-reveal'],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power2.out' },
        1.3
      );
    });

    // Mobile & Tablet (<= 992px): No pinning, no horizontal translation, 100% stable layout
    mm.add('(max-width: 992px)', () => {
      bottlesRef.current.forEach((bottle) => {
        if (bottle) {
          gsap.set(bottle, { clearProps: 'all' });
        }
      });

      gsap.from('.collection-bottle-item', {
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 15,
        stagger: 0.06,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} id="collection">
      <section
        ref={pinSectionRef}
        className="collection-section"
      >
        {/* Ambient Warm Glow */}
        <div
          className="ambient-glow ambient-wine"
          style={{
            width: '650px',
            height: '650px',
            top: '20%',
            left: '30%',
            opacity: 0.35,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="collection-grid">
            {/* Left Column: Visual Assembly Stage of all 5 Lipsticks */}
            <div className="collection-stage-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Main Stage Area */}
              <div style={{ position: 'relative', width: '100%', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Soft Circular Backdrop */}
                <div className="collection-backdrop-circle" />

                {/* View 1: 5 Assembling Lipstick Bottles — Healing Order */}
                {activeView === 'bottles' && (
                  <div className="collection-bottles-wrapper">
                    {PRODUCTS.map((prod, idx) => (
                      <div
                        key={prod.id}
                        ref={(el) => (bottlesRef.current[idx] = el)}
                        className="collection-bottle-item"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className={`collection-bottle-img ${
                            idx === 2
                              ? 'collection-bottle-img-center'
                              : idx === 1 || idx === 3
                              ? 'collection-bottle-img-mid'
                              : 'collection-bottle-img-outer'
                          }`}
                        />

                        {/* Miniature Shade Name under bottle */}
                        <span className="collection-shade-label">
                          {prod.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* View 2: Complete Box Packaging Set */}
                {activeView === 'boxes' && (
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '460px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '24px',
                      padding: '1.25rem',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(232, 185, 165, 0.4)',
                    }}
                  >
                    <img
                      src="/images/meshe_collection_boxes.png"
                      alt="MESHE 5-Piece Complete Box Collection"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '340px',
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    />
                    <div
                      style={{
                        marginTop: '0.85rem',
                        textAlign: 'center',
                        fontSize: '0.78rem',
                        color: 'var(--accent-brown)',
                        fontWeight: 600,
                      }}
                    >
                      5 Keepsake Boxes • Hydra Moisturizing • 16-Hour Wear
                    </div>
                  </div>
                )}

                {/* View 3: Daylight Arm Swatches */}
                {activeView === 'swatches' && (
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '480px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(232, 185, 165, 0.4)',
                    }}
                  >
                    <img
                      src="/images/meshe_arm_swatches.png"
                      alt="MESHE 5 Healing Shades Arm Swatches"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '340px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FFF7F2',
                        textAlign: 'center',
                        fontSize: '0.78rem',
                        color: 'var(--accent-brown)',
                        fontWeight: 600,
                      }}
                    >
                      Real Arm Swatches: Broken Beauty → Nevermine
                    </div>
                  </div>
                )}
              </div>

              {/* View Switcher Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.35rem 0.5rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  zIndex: 4,
                }}
              >
                <button
                  onClick={() => setActiveView('bottles')}
                  style={{
                    backgroundColor: activeView === 'bottles' ? 'var(--accent-brown)' : 'transparent',
                    color: activeView === 'bottles' ? '#FFFFFF' : 'var(--text-primary)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.45rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: activeView === 'bottles' ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  5 Bottles
                </button>
                <button
                  onClick={() => setActiveView('boxes')}
                  style={{
                    backgroundColor: activeView === 'boxes' ? 'var(--accent-brown)' : 'transparent',
                    color: activeView === 'boxes' ? '#FFFFFF' : 'var(--text-primary)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.45rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: activeView === 'boxes' ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Box Packaging
                </button>
                <button
                  onClick={() => setActiveView('swatches')}
                  style={{
                    backgroundColor: activeView === 'swatches' ? 'var(--accent-brown)' : 'transparent',
                    color: activeView === 'swatches' ? '#FFFFFF' : 'var(--text-primary)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.45rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: activeView === 'swatches' ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Arm Swatches
                </button>
              </div>

            </div>

            {/* Right Column: Collection Details */}
            <div className="collection-details-col">
              
              {/* Badge */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-brown)',
                    backgroundColor: 'rgba(232, 185, 165, 0.3)',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(107, 74, 64, 0.18)',
                  }}
                >
                  <Sparkles size={14} color="var(--accent-brown)" />
                  The Complete 5-Shade Set
                </span>
              </div>

              {/* Headline */}
              <h2
                className="coll-headline-reveal coll-text-switch"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.4rem)',
                  lineHeight: 1.18,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {COLLECTION_OFFER.title}
              </h2>

              {/* Subheading */}
              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                  color: 'var(--accent-brown)',
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                  wordWrap: 'break-word',
                }}
              >
                “{COLLECTION_OFFER.subtitle}”
              </p>

              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.88rem, 2.2vw, 0.98rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                Experience the full emotional journey from Lost Love to Nevermine. All 5 healing matte shades enriched with nourishing Shea Butter, Jojoba Oil & Vitamin E, curated in one keepsake gift box.
              </p>

              {/* Price & Savings Badge */}
              <div
                className="coll-price-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.1rem 1.4rem',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(232, 185, 165, 0.35)',
                  backdropFilter: 'blur(10px)',
                  marginBottom: '2rem',
                  width: 'fit-content',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <span
                    className="coll-subtext-switch"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'var(--text-muted)',
                      display: 'block',
                    }}
                  >
                    Special Set Price
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.2rem',
                        fontWeight: 600,
                        color: 'var(--pastel-peach)',
                        lineHeight: 1,
                      }}
                    >
                      ₹{COLLECTION_OFFER.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'line-through',
                      }}
                    >
                      ₹{COLLECTION_OFFER.originalPrice}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(201, 154, 154, 0.3)',
                    color: '#FFF',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    border: '1px solid rgba(201, 154, 154, 0.5)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  SAVE ₹{COLLECTION_OFFER.savings} (20% OFF)
                </div>
              </div>

              {/* Perks List */}
              <div
                className="coll-perks-list"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--pastel-peach)" style={{ flexShrink: 0 }} />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    All 5 Healing Shades
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Gift size={18} color="var(--pastel-peach)" style={{ flexShrink: 0 }} />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Complimentary Soft Pouch
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Truck size={18} color="var(--pastel-peach)" style={{ flexShrink: 0 }} />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Free Express Delivery (India)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Sparkles size={18} color="var(--pastel-peach)" style={{ flexShrink: 0 }} />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Shea Butter & Vitamin E
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="coll-cta-reveal"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  boxSizing: 'border-box',
                }}
              >
                <a
                  href={getWhatsAppOrderUrl('collection', COLLECTION_OFFER.title, COLLECTION_OFFER.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-shimmer"
                  style={{
                    padding: '1.05rem 2.2rem',
                    fontSize: '0.92rem',
                  }}
                >
                  <span>Get All 5 Shades (₹1596)</span>
                  <ArrowRight size={18} />
                </a>

                <button
                  onClick={onGetCollection}
                  className="btn btn-outline-light"
                  style={{
                    padding: '1.05rem 2rem',
                    fontSize: '0.92rem',
                  }}
                >
                  Add Collection to Bag
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
