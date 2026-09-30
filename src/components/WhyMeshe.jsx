import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyMeshe() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const reasons = [
    {
      number: '01',
      title: 'Made for Every Smile',
      highlight: 'Flattering Universal Undertones',
      description:
        'Conceived and calibrated specifically for Indian and diverse global skin tones. Each shade accentuates your natural radiance without washing you out.',
    },
    {
      number: '02',
      title: 'Five Signature Shades',
      highlight: 'Curated Perfection, Zero Fillers',
      description:
        'Instead of overwhelming you with 50 redundant shades, we perfected the 5 essential moods every woman needs—from understated daylight nudes to commanding evening reds.',
    },
    {
      number: '03',
      title: 'Everyday Weightless Wear',
      highlight: 'Second-Skin Breathability',
      description:
        'Infused with antioxidant-rich botanical oils and Vitamin E. Experience featherlight velvet touch that locks in moisture and never cakes, cracks, or feels tight.',
    },
    {
      number: '04',
      title: 'Effortless Velvet Satin-Matte',
      highlight: 'High-Impact One-Swipe Payoff',
      description:
        'A hybrid formulation bridging the comfort of a nourishing balm with the velvety intensity and precision of a luxury runway lip cream.',
    },
    {
      number: '05',
      title: 'Made to Express You',
      highlight: 'Pure, Clean & Compassionate',
      description:
        '100% cruelty-free, vegan-friendly, and formulated without harsh parabens or toxic heavy metals. Beauty crafted with conscience.',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate connecting timeline line height
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );
      }

      // Staggered reveal of each editorial point
      const rows = gsap.utils.toArray('.why-row');
      rows.forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.85,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-meshe"
      className="section"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Philosophy & Craft</span>
          <h2 className="section-title">Why MESHE?</h2>
          <p className="section-subtitle">
            An uncompromising standard of formulation, texture, and everyday luxury.
          </p>
        </div>

        {/* Editorial Numbered Timeline Layout */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          {/* Animated Connecting Vertical Line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '52px',
              width: '1.5px',
              backgroundColor: 'rgba(115, 26, 41, 0.2)',
              zIndex: 0,
            }}
            className="why-connector-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {reasons.map((item) => (
              <div
                key={item.number}
                className="why-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '105px 1fr',
                  gap: '2.5rem',
                  alignItems: 'baseline',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Large Editorial Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3.2rem',
                      lineHeight: 1,
                      fontWeight: 500,
                      color: 'var(--accent-wine)',
                      fontStyle: 'italic',
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '0.25rem 0',
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Content Block */}
                <div
                  style={{
                    borderBottom: '1px solid rgba(115, 26, 41, 0.1)',
                    paddingBottom: '2.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.title}
                    </h3>

                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'var(--accent-wine)',
                        backgroundColor: 'rgba(115, 26, 41, 0.06)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      maxWidth: '680px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-connector-line {
            display: none !important;
          }
          .why-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
