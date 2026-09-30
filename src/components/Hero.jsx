import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { BRAND } from '../config/siteConfig';
import gsap from 'gsap';

export default function Hero({ onExploreShades, onExploreCollection }) {
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

      // Master GSAP Timeline for Cinematic Page Load
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from(glow1Ref.current, { opacity: 0, scale: 0.9, duration: 0.5 }, 0)
        .from(glow2Ref.current, { opacity: 0, scale: 0.9, duration: 0.5 }, 0)
        .from(
          productRef.current,
          {
            opacity: 0,
            scale: 0.9,
            rotate: -3,
            y: 20,
            duration: 0.6,
            ease: 'back.out(1.2)',
          },
          0
        )
        .from('.hero-badge-tag', { opacity: 0, y: 10, duration: 0.35 }, 0.05)
        .from('.hero-title-word', { opacity: 0, y: 15, duration: 0.35, stagger: 0.02 }, 0.08)
        .from('.hero-tagline', { opacity: 0, y: 12, duration: 0.35 }, 0.12)
        .from('.hero-desc', { opacity: 0, y: 10, duration: 0.35 }, 0.16)
        .from('.hero-cta-group', { opacity: 0, y: 10, duration: 0.35 }, 0.2)
        .from('.hero-trust-item', { opacity: 0, y: 8, stagger: 0.04, duration: 0.3 }, 0.24)
        .from(
          badgeRef.current,
          {
            opacity: 0,
            scale: 0.7,
            rotate: 10,
            duration: 0.45,
            ease: 'back.out(1.5)',
          },
          0.2
        );

      // Desktop Mouse Parallax Effect (subtle & elegant)
      const handleMouseMove = (e) => {
        if (window.innerWidth < 992) return;
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 45;
        const moveY = (clientY - centerY) / 45;

        gsap.to(productRef.current, {
          x: moveX,
          y: moveY,
          rotate: moveX * 0.15,
          duration: 1.2,
          ease: 'power2.out',
        });

        gsap.to(badgeRef.current, {
          x: -moveX * 1.4,
          y: -moveY * 1.4,
          duration: 1.4,
          ease: 'power2.out',
        });

        gsap.to(glow1Ref.current, {
          x: moveX * 2,
          y: moveY * 2,
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Lighting Orbs */}
      <div
        ref={glow1Ref}
        className="ambient-glow ambient-blush"
        style={{
          width: '580px',
          height: '580px',
          top: '8%',
          right: '5%',
        }}
      />
      <div
        ref={glow2Ref}
        className="ambient-glow ambient-wine"
        style={{
          width: '420px',
          height: '420px',
          bottom: '5%',
          left: '-5%',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="hero-headline-col" style={{ maxWidth: '640px' }}>
            
            {/* Tag / Micro-Badge */}
            <div className="hero-badge-tag" style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-wine)',
                  backgroundColor: 'rgba(115, 26, 41, 0.06)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(115, 26, 41, 0.12)',
                }}
              >
                <Sparkles size={14} color="var(--accent-wine)" />
                5 Signature Shades • Velvet Satin-Matte
              </span>
            </div>

            {/* Brand Title: MESHE */}
            <div
              ref={headlineRef}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.8rem, 8vw, 6.75rem)',
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              <span className="hero-title-word" style={{ display: 'inline-block' }}>M</span>
              <span className="hero-title-word" style={{ display: 'inline-block' }}>E</span>
              <span className="hero-title-word" style={{ display: 'inline-block' }}>S</span>
              <span className="hero-title-word" style={{ display: 'inline-block' }}>H</span>
              <span className="hero-title-word" style={{ display: 'inline-block' }}>E</span>
            </div>

            {/* Tagline */}
            <h1
              className="hero-tagline"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                color: 'var(--accent-wine)',
                marginBottom: '1.5rem',
              }}
            >
              “Made for Every Smile”
            </h1>

            {/* Short Supporting Sentence */}
            <p
              className="hero-desc"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--text-secondary)',
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              Five iconic shades. One signature smile. An ultra-weightless velvet formulation crafted to embrace and flatter every undertone.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '3.5rem',
              }}
            >
              <button
                onClick={onExploreShades}
                className="btn btn-primary btn-shimmer"
                style={{
                  fontSize: '0.92rem',
                  padding: '1.05rem 2.4rem',
                }}
              >
                <span>Explore Shades</span>
                <ArrowDownRight size={18} />
              </button>

              <button
                onClick={onExploreCollection}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.92rem',
                  padding: '1.05rem 2.2rem',
                }}
              >
                Get the Collection (₹1596)
              </button>
            </div>

            {/* Trust & Quality Highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '2rem',
              }}
            >
              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={18} color="var(--accent-wine)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  ₹399 per shade
                </span>
              </div>

              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Heart size={18} color="var(--accent-wine)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  100% Cruelty-Free
                </span>
              </div>

              <div className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sparkles size={18} color="var(--accent-wine)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  All-Day Weightless Comfort
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Lipstick Visual */}
          <div
            className="hero-product-col"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem 0',
            }}
          >
            {/* Decorative Architectural Pedestal Circle */}
            <div
              style={{
                position: 'absolute',
                width: 'min(480px, 85vw)',
                height: 'min(480px, 85vw)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #F4ECE6 0%, #EFE5DD 70%, transparent 100%)',
                border: '1px solid rgba(115, 26, 41, 0.08)',
                zIndex: 0,
              }}
            />

            {/* Main Product Visual */}
            <div
              ref={productRef}
              style={{
                position: 'relative',
                zIndex: 2,
                filter: 'drop-shadow(0 28px 45px rgba(50, 15, 20, 0.22))',
                willChange: 'transform',
                maxHeight: 'min(620px, 75vh)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/hero-lipstick.png"
                alt="MESHE Luxury Velvet Lipstick"
                style={{
                  height: 'auto',
                  maxHeight: 'min(580px, 70vh)',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Floating Luxury Seal Badge */}
            <div
              ref={badgeRef}
              className="pulse-badge"
              style={{
                position: 'absolute',
                top: '12%',
                right: '4%',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '1.1rem 1.3rem',
                borderRadius: '50%',
                boxShadow: '0 16px 36px rgba(45, 20, 15, 0.12)',
                border: '1px solid rgba(115, 26, 41, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '110px',
                height: '110px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  lineHeight: 1,
                  marginBottom: '3px',
                }}
              >
                Signature
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: 'var(--accent-wine)',
                  lineHeight: 1,
                }}
              >
                ₹399
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  color: 'var(--text-secondary)',
                  marginTop: '3px',
                  fontWeight: 500,
                }}
              >
                Per Shade
              </span>
            </div>

            {/* Bottom Shade Pill Indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '4%',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(10px)',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 8px 24px rgba(45, 20, 15, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#933B3F',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                }}
              >
                Featured: Shade 05 — Lost Love
              </span>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
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
