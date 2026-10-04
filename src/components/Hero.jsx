import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { BRAND, PRODUCTS } from '../config/siteConfig';
import gsap from 'gsap';

export default function Hero({ onExploreShades, onExploreCollection }) {
  const [activeShadeIndex, setActiveShadeIndex] = useState(1); // Default to Shade 02: Broken Beauty
  const currentProduct = PRODUCTS[activeShadeIndex] || PRODUCTS[0];

  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const productRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(['.hero-fade-in', productRef.current, headlineRef.current], { opacity: 1 });
        return;
      }

      // Master GSAP Timeline for Soft, Emotional Page Load
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from(glow1Ref.current, { opacity: 0, scale: 0.9, duration: 0.5 }, 0)
        .from(glow2Ref.current, { opacity: 0, scale: 0.9, duration: 0.5 }, 0)
        .from(
          productRef.current,
          {
            opacity: 0,
            scale: 0.92,
            y: 20,
            duration: 0.65,
            ease: 'power2.out',
          },
          0
        )
        .from('.hero-badge-tag', { opacity: 0, y: 10, duration: 0.35 }, 0.05)
        .from('.hero-brand-name', { opacity: 0, y: 15, duration: 0.4 }, 0.08)
        .from('.hero-main-line', { opacity: 0, y: 12, duration: 0.4 }, 0.12)
        .from('.hero-desc', { opacity: 0, y: 10, duration: 0.35 }, 0.16)
        .from('.hero-cta-group', { opacity: 0, y: 10, duration: 0.35 }, 0.2)
        .from('.hero-trust-item', { opacity: 0, y: 8, stagger: 0.04, duration: 0.3 }, 0.24)
        .from(
          badgeRef.current,
          {
            opacity: 0,
            scale: 0.75,
            duration: 0.45,
            ease: 'back.out(1.4)',
          },
          0.2
        );

      // Subtle Parallax Effect (Desktop only)
      const handleMouseMove = (e) => {
        if (window.innerWidth < 992) return;
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 45;
        const moveY = (clientY - centerY) / 45;

        gsap.to(productRef.current, {
          x: moveX * 0.8,
          y: moveY * 0.8,
          duration: 1.2,
          ease: 'power2.out',
        });

        gsap.to(badgeRef.current, {
          x: -moveX * 1.2,
          y: -moveY * 1.2,
          duration: 1.4,
          ease: 'power2.out',
        });

        gsap.to(glow1Ref.current, {
          x: moveX * 1.5,
          y: moveY * 1.5,
          duration: 2,
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Comfort Lighting */}
      <div
        ref={glow1Ref}
        className="ambient-glow ambient-blush"
        style={{
          width: '580px',
          height: '580px',
          top: '6%',
          right: '5%',
        }}
      />
      <div
        ref={glow2Ref}
        className="ambient-glow ambient-wine"
        style={{
          width: '440px',
          height: '440px',
          bottom: '5%',
          left: '-5%',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Column: Healing Story Headline & Actions */}
          <div className="hero-headline-col" style={{ maxWidth: '640px' }}>
            
            {/* 1. Top Badge: 5 Healing Shades • Matte Finish */}
            <div className="hero-badge-tag" style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brown)',
                  backgroundColor: 'rgba(232, 185, 165, 0.28)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(107, 74, 64, 0.16)',
                }}
              >
                <Sparkles size={14} color="var(--accent-brown)" />
                5 Healing Shades • Matte Finish
              </span>
            </div>

            {/* Brand Name */}
            <div
              className="hero-brand-name"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 6.5vw, 5.25rem)',
                lineHeight: 0.95,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'var(--accent-brown)',
                marginBottom: '0.85rem',
              }}
            >
              MESHE
            </div>

            {/* 8. Main Line: Five shades. One healing journey. */}
            <h1
              className="hero-main-line"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                lineHeight: 1.18,
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Five shades. One healing journey.
            </h1>

            {/* 1. Supporting Sentence: Healing-focused copy */}
            <p
              className="hero-desc"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.02rem, 1.35vw, 1.2rem)',
                color: 'var(--text-secondary)',
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              Colours inspired by real emotions, real stories, and the beautiful journey of finding yourself again.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              <button
                onClick={onExploreShades}
                className="btn btn-primary btn-shimmer"
                style={{
                  fontSize: '0.92rem',
                  padding: '1rem 2.3rem',
                }}
              >
                <span>Explore The 5 Shades</span>
                <ArrowDownRight size={18} />
              </button>

              <button
                onClick={onExploreCollection}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.92rem',
                  padding: '1rem 2.1rem',
                }}
              >
                The Full Set (₹1596)
              </button>
            </div>

            {/* Trust & Healing Care Highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.25rem',
                flexWrap: 'wrap',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.75rem',
              }}
            >
              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={18} color="var(--accent-brown)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  ₹399 per shade
                </span>
              </div>

              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Heart size={18} color="var(--pastel-rose)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  100% Cruelty-Free & Vegan
                </span>
              </div>

              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sparkles size={18} color="var(--accent-brown)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Shea Butter, Jojoba & Vit E
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Product Visual (Warm, Healing Aura) */}
          <div
            className="hero-product-col"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.5rem 0',
            }}
          >
            {/* Soft Pastel Circular Backdrop */}
            <div
              style={{
                position: 'absolute',
                width: 'min(460px, 85vw)',
                height: 'min(460px, 85vw)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #E8D7C8 0%, #F7EFE8 70%, transparent 100%)',
                border: '1px solid rgba(107, 74, 64, 0.1)',
                zIndex: 0,
              }}
            />

            {/* Main Product Visual — Fully visible, never cropped on mobile */}
            <div
              ref={productRef}
              style={{
                position: 'relative',
                zIndex: 2,
                filter: 'drop-shadow(0 20px 35px rgba(107, 74, 64, 0.18))',
                willChange: 'transform',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img
                key={currentProduct.id}
                src={currentProduct.image}
                alt={`${currentProduct.name} - MESHE Healing Velvet Lipstick`}
                style={{
                  height: 'auto',
                  maxHeight: 'min(500px, 58vh)',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>

            {/* Floating Price & Healing Touch Badge */}
            <div
              ref={badgeRef}
              className="pulse-badge"
              style={{
                position: 'absolute',
                top: '8%',
                right: '4%',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(12px)',
                padding: '1rem',
                borderRadius: '50%',
                boxShadow: '0 12px 30px rgba(107, 74, 64, 0.12)',
                border: '1px solid rgba(232, 185, 165, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '112px',
                height: '112px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brown)',
                  lineHeight: 1,
                  marginBottom: '4px',
                  fontWeight: 600,
                }}
              >
                Healing Touch
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: 'var(--accent-brown)',
                  lineHeight: 1,
                }}
              >
                ₹399
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  fontWeight: 500,
                }}
              >
                Per Shade
              </span>
            </div>

            {/* Interactive 5-Shade Switcher Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: '1%',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(12px)',
                padding: '0.65rem 1.15rem',
                borderRadius: '9999px',
                border: '1px solid rgba(107, 74, 64, 0.16)',
                boxShadow: '0 10px 28px rgba(107, 74, 64, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                maxWidth: '92%',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                {PRODUCTS.map((prod, idx) => {
                  const isSelected = activeShadeIndex === idx;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => setActiveShadeIndex(idx)}
                      title={`Shade ${prod.shadeNumber}: ${prod.name} (${prod.stage})`}
                      aria-label={`Select Shade ${prod.shadeNumber} ${prod.name}`}
                      style={{
                        width: isSelected ? '24px' : '18px',
                        height: isSelected ? '24px' : '18px',
                        borderRadius: '50%',
                        backgroundColor: prod.colorHex,
                        border: isSelected ? '2.5px solid #FFFFFF' : '1px solid rgba(0,0,0,0.1)',
                        boxShadow: isSelected ? `0 0 0 2px ${prod.colorHex}, 0 2px 8px rgba(0,0,0,0.2)` : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        padding: 0,
                      }}
                    />
                  );
                })}
              </div>

              <div
                style={{
                  height: '14px',
                  width: '1px',
                  backgroundColor: 'rgba(107, 74, 64, 0.2)',
                  margin: '0 0.2rem',
                }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--accent-brown)',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentProduct.shadeNumber} • {currentProduct.name}
              </span>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
            text-align: center;
          }
          .hero-headline-col {
            margin: 0 auto;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-trust-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
