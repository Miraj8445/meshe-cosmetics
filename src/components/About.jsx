import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

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
          
          {/* Left Column: Brand Story */}
          <div>
            <span className="section-tag">Our Story & Essence</span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                lineHeight: 1.2,
                fontWeight: 500,
                color: 'var(--accent-brown)',
                marginBottom: '1.75rem',
              }}
            >
              Beauty as a Part of Healing
            </h2>

            {/* 4. Complete Brand Story Text (Full paragraph visible & readable on mobile) */}
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <p>
                MESHE was created around a simple idea — that beauty can be a small part of healing.
              </p>
              <p>
                We believe beauty is not about hiding what you’ve been through or becoming someone else; it’s about feeling comfortable enough to be yourself again. MESHE was created for those little moments when you’re finding your way back to yourself—when you’re learning to let go, growing through what happened, rebuilding your confidence, and slowly discovering your smile again.
              </p>
              <p>
                Our shades are designed to feel personal, effortless and expressive, giving you a little colour to match every mood and every version of you. From the days you feel a little lost to the days you feel ready to start again, MESHE is here to remind you that healing doesn’t have to look perfect—it can be soft, messy, colourful and completely your own.
              </p>
              <p style={{ color: 'var(--accent-brown)', fontWeight: 500 }}>
                Because sometimes, something as simple as putting on your favourite shade can become a moment of choosing yourself.
              </p>
            </div>

            {/* Founders' Signature Touch */}
            <div
              style={{
                borderLeft: '2px solid var(--accent-brown)',
                paddingLeft: '1.5rem',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  fontStyle: 'italic',
                  color: 'var(--accent-brown)',
                  lineHeight: 1.5,
                  marginBottom: '0.4rem',
                }}
              >
                “Two girls, one dream — creating a brand born from our own story of becoming.”
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                The MESHE Founders
              </span>
            </div>
          </div>

          {/* Right Column: Visual with Mask in Soft Warm Palette */}
          <div style={{ position: 'relative' }}>
            
            {/* Background Decorative Accent Frame */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '100%',
                height: '100%',
                border: '1.5px solid rgba(107, 74, 64, 0.18)',
                borderRadius: '28px',
                zIndex: 0,
              }}
              className="about-frame-border"
            />

            {/* Masked Image Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(107, 74, 64, 0.12)',
                backgroundColor: '#FFFFFF',
                padding: 'clamp(1rem, 2vw, 1.75rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(107, 74, 64, 0.12)',
              }}
            >
              <img
                src="/images/meshe_brand_boxes.png"
                alt="MESHE - Made for Every Smile Packaging"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '540px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 15px 30px rgba(107, 74, 64, 0.14))',
                }}
              />
            </div>

            {/* Floating Soft Detail Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.15rem 1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(107, 74, 64, 0.12)',
                boxShadow: '0 14px 30px rgba(107, 74, 64, 0.08)',
                maxWidth: '250px',
              }}
              className="about-floating-badge"
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--accent-brown)',
                  display: 'block',
                  lineHeight: 1.15,
                  marginBottom: '4px',
                }}
              >
                Gentle & Honest
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                Enriched with Shea Butter, Jojoba & Vitamin E. Beauty that truly cares for you.
              </p>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.75rem !important;
          }
          .about-frame-border, .about-floating-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
