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
        // Simplified non-pinning reveal for mobile or reduced motion
        gsap.from('.collection-anim-item', {
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
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
          end: '+=160%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Background color transitions from ivory -> deep royal wine
      tl.to(
        pinSectionRef.current,
        {
          backgroundColor: '#24070D',
          duration: 1.5,
          ease: 'power1.inOut',
        },
        0
      );

      // Transition text colors to light
      tl.to(
        '.coll-text-switch',
        {
          color: '#FDF9F6',
          duration: 1.2,
        },
        0
      );

      tl.to(
        '.coll-subtext-switch',
        {
          color: '#D1BEB9',
          duration: 1.2,
        },
        0
      );

      // 2. Individual lipstick bottles enter from different angles and arrange into composition
      const initialOffsets = [
        { x: -280, y: -120, rotate: -18, scale: 0.8 },
        { x: -140, y: 160, rotate: -10, scale: 0.85 },
        { x: 0, y: -190, rotate: 4, scale: 0.9 },
        { x: 140, y: 170, rotate: 12, scale: 0.85 },
        { x: 280, y: -110, rotate: 20, scale: 0.8 },
      ];

      bottlesRef.current.forEach((bottle, i) => {
        if (!bottle) return;
        const off = initialOffsets[i];
        gsap.set(bottle, {
          x: off.x,
          y: off.y,
          rotate: off.rotate,
          scale: off.scale,
          opacity: 0.75,
        });

        tl.to(
          bottle,
          {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.6,
            ease: 'power2.out',
          },
          0.3 + i * 0.08
        );
      });

      // 3. Collection headline & gold badge reveals
      tl.fromTo(
        '.coll-headline-reveal',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        0.8
      );

      // 4. Price scales subtly into focus
      tl.fromTo(
        '.coll-price-badge',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)' },
        1.1
      );

      // 5. Offer perks and CTA fade in
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
          backgroundColor: '#FAF7F2',
          padding: '6rem 0',
          overflow: 'hidden',
          transition: 'background-color 0.4s ease',
        }}
      >
        {/* Ambient Wine/Gold Lighting Glow */}
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
                minHeight: '480px',
              }}
            >
              {/* Luxury Circular Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  width: 'min(500px, 90vw)',
                  height: 'min(500px, 90vw)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(115, 26, 41, 0.25) 0%, rgba(36, 7, 13, 0.1) 60%, transparent 100%)',
                  border: '1px solid rgba(197, 160, 89, 0.2)',
                  zIndex: 0,
                }}
              />

              {/* 5 Assembling Lipstick Bottles */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  position: 'relative',
                  zIndex: 2,
                  padding: '2rem 0',
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
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35))',
                      willChange: 'transform, opacity',
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        height: idx === 2 ? '340px' : idx === 1 || idx === 3 ? '310px' : '280px',
                        width: 'auto',
                        objectFit: 'contain',
                        transform: idx === 2 ? 'translateY(-10px)' : 'none',
                      }}
                    />

                    {/* Miniature Shade Name under bottle */}
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold-light)',
                        marginTop: '0.5rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {prod.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Box Packaging Glimpse in Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '5%',
                  zIndex: 1,
                  opacity: 0.15,
                  pointerEvents: 'none',
                  filter: 'blur(2px)',
                }}
              >
                <img
                  src="/images/logo-light.png"
                  alt="MESHE seal"
                  style={{ width: '220px', height: '220px' }}
                />
              </div>

            </div>

            {/* Right Column: Editorial Campaign Offer & Details */}
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
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-light)',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                  }}
                >
                  <Sparkles size={14} color="var(--accent-gold)" />
                  Exclusive 5-Shade Vault Offer
                </span>
              </div>

              {/* Headline */}
              <h2
                className="coll-headline-reveal coll-text-switch"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                The Complete MESHE Collection
              </h2>

              {/* Subheading */}
              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  color: 'var(--accent-wine)',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                }}
              >
                “Five shades. One complete collection.”
              </p>

              <p
                className="coll-subtext-switch"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                Why choose a single mood when you can wear them all? From effortless daytime nudes to hypnotic evening reds, receive every handcrafted MESHE lipstick in a bespoke presentation set.
              </p>

              {/* Price & Savings Badge */}
              <div
                className="coll-price-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
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
                    Special Vault Price
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        color: 'var(--accent-gold-light)',
                        lineHeight: 1,
                      }}
                    >
                      ₹{COLLECTION_OFFER.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.1rem',
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
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    color: '#FFF',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
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
                  <CheckCircle2 size={18} color="var(--accent-gold)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    All 5 Full-Size Lipsticks
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Gift size={18} color="var(--accent-gold)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Complimentary Velvet Pouch
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Truck size={18} color="var(--accent-gold)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Free Express Delivery (India)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Sparkles size={18} color="var(--accent-gold)" />
                  <span className="coll-text-switch" style={{ fontSize: '0.84rem', fontWeight: 500 }}>
                    Signature Gift Box Packaging
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
                    padding: '1.1rem 2.5rem',
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
                    padding: '1.1rem 2rem',
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
              gap: 3.5rem !important;
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
