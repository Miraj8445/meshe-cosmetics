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
      subtitle: 'Your Beauty, Your Way',
      headline: 'HEALING STARTS WITH YOU',
      description:
        "When something changes your life, you sometimes lose a little connection with yourself too. MESHE is about finding that connection again. Wear what makes you feel like you. Express yourself without expectations, without comparison, and without having to fit into anyone else's idea of beauty.",
    },
    {
      number: '02',
      subtitle: 'A Shade for Every Mood',
      headline: 'EVERY FEELING HAS A STORY',
      description:
        "Our five shades aren't just colours. Each one represents a different feeling, memory, or stage of the healing journey. From the emotions you struggle to let go of to the moment you finally choose yourself again—there's a little story behind every shade.",
    },
    {
      number: '03',
      subtitle: 'Comfort With Care',
      headline: 'BEAUTY THAT CARES FOR YOU',
      description:
        "Healing is about taking care of yourself, too. Our formula is enriched with Shea Butter, Jojoba Oil & Vitamin E, bringing colour and care together for lips that feel soft, comfortable and nourished. Because beauty shouldn't just make you look good—it should feel good, too.",
    },
    {
      number: '04',
      subtitle: 'Your Healing Phase',
      headline: "FOR THE DAYS YOU'RE FINDING YOURSELF AGAIN",
      description:
        'MESHE is for the messy days, the growing days, the “I\'m figuring it out” days and the days when you finally feel like yourself again. A little colour. A little confidence. A little reminder: You are allowed to heal at your own pace.',
    },
    {
      number: '05',
      subtitle: 'Two Girls. One Dream.',
      headline: 'A BRAND BORN FROM A STORY',
      description:
        "MESHE started with two young girls who had a dream of creating something of their own. What started as an idea became a journey of learning, creating, making mistakes, starting again and believing in ourselves. And that's why MESHE means more to us than just cosmetics. It's our story of becoming—and we want you to see a little piece of your story in it, too.",
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Connecting vertical line animation
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
        <div className="section-header" style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-tag">Our Belief & Core</span>
          <h2 className="section-title">WHY MESHE?</h2>
          
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontWeight: 300,
              marginTop: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left',
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '24px',
              border: '1px solid rgba(107, 74, 64, 0.12)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p style={{ fontWeight: 500, color: 'var(--accent-brown)', fontSize: '1.15rem', fontFamily: 'var(--font-serif)' }}>
              MESHE was created with a simple belief — beauty can be a part of healing.
            </p>
            <p>
              We all go through moments that change us. Sometimes it's heartbreak, sometimes a missed opportunity, a failed dream, losing someone, family struggles, or simply life not turning out the way we imagined.
            </p>
            <p>
              Everyone has a story. Everyone has a healing phase.
            </p>
            <p style={{ color: 'var(--accent-brown)', fontWeight: 500 }}>
              MESHE is here to celebrate that journey — the process of accepting, growing, finding yourself again, and slowly learning to smile again.
            </p>
          </div>
        </div>

        {/* 5 Pillars Timeline Layout */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '1.5rem 0',
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
              backgroundColor: 'rgba(107, 74, 64, 0.2)',
              zIndex: 0,
            }}
            className="why-connector-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {reasons.map((item) => (
              <div
                key={item.number}
                className="why-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '2.25rem',
                  alignItems: 'baseline',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Large Number */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3rem',
                      lineHeight: 1,
                      fontWeight: 500,
                      color: 'var(--accent-brown)',
                      fontStyle: 'italic',
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '0.2rem 0',
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                    border: '1px solid rgba(107, 74, 64, 0.1)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.85rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'var(--accent-soft-brown)',
                      }}
                    >
                      {item.number} — {item.subtitle}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                      fontWeight: 500,
                      color: 'var(--accent-brown)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.headline}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.98rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Line Banner */}
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center',
              backgroundColor: 'var(--accent-brown)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3rem) 2rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                fontStyle: 'italic',
                lineHeight: 1.4,
                marginBottom: '1rem',
                color: '#FAF4EE',
              }}
            >
              “For every girl who is healing, growing, changing and becoming herself again.”
            </p>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--pastel-peach)',
                fontWeight: 600,
                display: 'block',
              }}
            >
              MESHE — Made for Every Smile
            </span>
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
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
