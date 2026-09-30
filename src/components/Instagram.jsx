import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../config/siteConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Instagram() {
  const sectionRef = useRef(null);

  const posts = [
    {
      id: 1,
      image: '/images/collection-lifestyle.jpg',
      tag: 'Everyday Essentials',
      caption: 'In good company. The complete 5-shade lineup out in the wild. ☕✨',
      likes: '1.4k',
    },
    {
      id: 2,
      image: '/images/editorial-arm.jpg',
      tag: 'Real Swatches',
      caption: 'One swipe, honest payoff. From velvet nude to sultry ruby.',
      likes: '2.1k',
    },
    {
      id: 3,
      image: '/images/meshe_swatches_silk.jpg',
      tag: 'Texture Study',
      caption: 'Velvet satin-matte on silk. Never dry, always breathing.',
      likes: '3.8k',
    },
    {
      id: 4,
      image: '/images/collection.png',
      tag: 'Unboxed Vault',
      caption: 'All five shades in their collector boxes. The signature set.',
      likes: '1.9k',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.social-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="section"
      style={{
        backgroundColor: 'var(--bg-champagne)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Community & Aesthetic</span>
          <h2 className="section-title">See MESHE in the real world.</h2>
          <p className="section-subtitle">
            Tagged by our community. Real smiles, real moments, and unfiltered beauty.
          </p>
        </div>

        {/* Editorial Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {posts.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{
                position: 'relative',
                display: 'block',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                boxShadow: 'var(--shadow-md)',
                textDecoration: 'none',
              }}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="social-card-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />

              {/* Tag in Top Left */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  zIndex: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--accent-wine)',
                  textTransform: 'uppercase',
                }}
              >
                {post.tag}
              </div>

              {/* Hover Dark Overlay with Instagram Details */}
              <div
                className="social-card-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(36, 7, 13, 0.72)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 3,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <InstagramIcon size={24} color="#FFFFFF" />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {post.caption}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-gold-light)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                    }}
                  >
                    <Heart size={14} fill="currentColor" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.95rem 2.2rem',
              fontSize: '0.86rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <InstagramIcon size={18} color="var(--accent-wine)" />
            <span>Follow {BRAND.instagramHandle}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>

      <style>{`
        .social-card:hover .social-card-img {
          transform: scale(1.08);
        }
        .social-card:hover .social-card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
