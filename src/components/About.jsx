import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const textColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Image reveal using clip-path animation
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // 2. Parallax Image Movement inside container
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Text reveal from bottom
      if (textColRef.current) {
        gsap.from('.about-reveal-item', {
          scrollTrigger: {
            trigger: textColRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 35,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Brand Statement & Story */}
          <div ref={textColRef}>
            <span className="section-tag about-reveal-item">Our Story & Essence</span>

            <h2
              className="about-reveal-item"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
              }}
            >
              “MESHE was created around a simple idea — beauty should feel personal, effortless and expressive.”
            </h2>

            <div
              className="about-reveal-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2.5rem',
              }}
            >
              <p>
                In a beauty landscape overflowing with endless color wheels and heavy synthetic formulas, MESHE was born out of an urge for clarity and luxury. We asked: what if you didn’t need twenty lipsticks, but five masterfully formulated staples that never fail you?
              </p>
              <p>
                Every pigment in our 5-shade collection was tested across diverse undertones in real daylight. Handcrafted with skin-nourishing botanical extracts and pure velvet polymers, MESHE delivers radiant color that breathes with you throughout your day.
              </p>
            </div>

            {/* Editable Founder Note Placeholder */}
            <div
              className="about-reveal-item"
              style={{
                borderLeft: '2px solid var(--accent-wine)',
                paddingLeft: '1.5rem',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'var(--accent-wine)',
                  lineHeight: 1.5,
                  marginBottom: '0.5rem',
                }}
              >
                “When you wear a shade that truly belongs to you, confidence isn't put on—it simply shines.”
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                The MESHE Founders’ Studio
              </span>
            </div>
          </div>

          {/* Right Column: Visual with Mask & Parallax */}
          <div style={{ position: 'relative' }}>
            
            {/* Background Decorative Accent Frame */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                right: '-18px',
                width: '100%',
                height: '100%',
                border: '1.5px solid rgba(115, 26, 41, 0.15)',
                borderRadius: '28px',
                zIndex: 0,
              }}
              className="about-frame-border"
            />

            {/* Masked Image Container */}
            <div
              ref={imageWrapperRef}
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(45, 20, 15, 0.12)',
                height: '560px',
              }}
            >
              <img
                ref={imageRef}
                src="/images/editorial-model.jpg"
                alt="MESHE Woman — Made for Every Smile"
                style={{
                  width: '100%',
                  height: '115%',
                  objectFit: 'cover',
                  display: 'block',
                  transform: 'translateY(-5%)',
                }}
              />
            </div>

            {/* Floating Luxury Detail Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.25rem 1.6rem',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 16px 36px rgba(45, 20, 15, 0.1)',
                maxWidth: '240px',
              }}
              className="about-floating-badge"
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--accent-wine)',
                  display: 'block',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                100% Honest
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                No filters. Just skin-loving ingredients and rich authentic pigment.
              </p>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .about-frame-border, .about-floating-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
