import React, { useEffect, useRef } from 'react';
import { COLLECTION_OFFER, PRODUCTS, getWhatsAppOrderUrl } from '../config/siteConfig';
import { Sparkles, CheckCircle2, Gift, Truck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Collection({ onGetCollection }) {
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);
  const bottlesRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion || isMobile) {
        // Simplified reveal for mobile or reduced motion
        gsap.from('.collection-anim-item', {
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 35,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
        });
        return;
      }

      // Desktop Cinematic Pinned GSAP ScrollTrigger Experience
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

      // 1. Background color transitions from cream -> deep warm earth brown
      tl.to(
        pinSectionRef.current,
        {
          backgroundColor: '#38241F',
          duration: 1.5,
          ease: 'power1.inOut',
        },
        0
      );

      // Transition text colors to light warm cream
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

      // 2. Individual lipstick bottles enter and settle into composition
      const initialOffsets = [
        { x: -240, y: -100, rotate: -14, scale: 0.85 },
        { x: -120, y: 140, rotate: -8, scale: 0.9 },
        { x: 0, y: -160, rotate: 3, scale: 0.92 },
        { x: 120, y: 150, rotate: 10, scale: 0.9 },
        { x: 240, y: -90, rotate: 16, scale: 0.85 },
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

      // 3. Collection headline & price badges reveal
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="collection">
      <section
        ref={pinSectionRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--bg-primary)',
          padding: '5.5rem 0',
          overflow: 'hidden',
          transition: 'background-color 0.4s ease',
        }}
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4.5rem',
              alignItems: 'center',
            }}
            className="collection-grid"
          >
            {/* Left Column: Visual Assembly Stage of all 5 Lipsticks */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '440px',
              }}
            >
              {/* Soft Circular Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  width: 'min(480px, 88vw)',
                  height: 'min(480px, 88vw)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(232, 185, 165, 0.3) 0%, rgba(107, 74, 64, 0.1) 60%, transparent 100%)',
                  border: '1px solid rgba(232, 185, 165, 0.3)',
                  zIndex: 0,
                }}
              />

              {/* 5 Assembling Lipstick Bottles — Healing Order */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  position: 'relative',
                  zIndex: 2,
                  padding: '1.5rem 0',
                }}
              >
                {PRODUCTS.map((prod, idx) => (
                  <div
                    key={prod.id}
                    ref={(el) => (bottlesRef.current[idx] = el)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      filter: 'drop-shadow(0 16px 25px rgba(0, 0, 0, 0.25))',
                      willChange: 'transform, opacity',
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        height: idx === 2 ? '300px' : idx === 1 || idx === 3 ? '270px' : '250px',
                        width: 'auto',
                        objectFit: 'contain',
                        transform: idx === 2 ? 'translateY(-8px)' : 'none',
                      }}
                    />

                    {/* Miniature Shade Name under bottle */}
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--pastel-peach)',
                        marginTop: '0.4rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {prod.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Box Packaging Glimpse */}
              <div
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '5%',
                  zIndex: 1,
                  opacity: 0.12,
                  pointerEvents: 'none',
                  filter: 'blur(2px)',
                }}
              >
                <img
                  src="/images/logo-light.png"
                  alt="MESHE seal"
                  style={{ width: '200px', height: '200px' }}
                />
              </div>

            </div>

            {/* Right Column: Collection Details */}
            <div style={{ maxWidth: '580px' }}>
              
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
                  fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
                  lineHeight: 1.15,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                }}
              >
                {COLLECTION_OFFER.title}
              </h2>

              {/* Subheading */}
              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--accent-brown)',
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                }}
              >
                “{COLLECTION_OFFER.subtitle}”
              </p>

              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
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
                  gap: '1.5rem',
                  padding: '1.2rem 1.6rem',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(232, 185, 165, 0.35)',
                  backdropFilter: 'blur(10px)',
                  marginBottom: '2rem',
                  width: 'fit-content',
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
                        fontSize: '2.4rem',
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
                        fontSize: '1.05rem',
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
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    border: '1px solid rgba(201, 154, 154, 0.5)',
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
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--pastel-peach)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    All 5 Healing Shades
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Gift size={18} color="var(--pastel-peach)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Complimentary Soft Pouch
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Truck size={18} color="var(--pastel-peach)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Free Express Delivery (India)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Sparkles size={18} color="var(--pastel-peach)" />
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
                }}
              >
                <a
                  href={getWhatsAppOrderUrl('collection', COLLECTION_OFFER.title, COLLECTION_OFFER.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-shimmer"
                  style={{
                    padding: '1.05rem 2.4rem',
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

        <style>{`
          @media (max-width: 992px) {
            .collection-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              text-align: center;
            }
            .collection-grid > div:last-child {
              margin: 0 auto;
            }
            .coll-price-badge {
              margin-left: auto;
              margin-right: auto;
            }
            .coll-perks-list {
              text-align: left;
            }
            .coll-cta-reveal {
              justify-content: center;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
