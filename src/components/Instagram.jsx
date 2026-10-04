import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../config/siteConfig';

export default function Instagram() {
  const posts = [
    {
      id: 1,
      image: '/images/meshe_boxes_lifestyle.png',
      tag: '16-Hour Wear',
      caption: 'Lightweight comfort that stays with you. Five shades, one healing journey. ✨',
      likes: '2.4k',
    },
    {
      id: 2,
      image: '/images/meshe_arm_swatches.png',
      tag: 'Real Daylight Swatches',
      caption: 'Direct daylight swatches on real skin: Broken Beauty → Nevermine. 🕊️',
      likes: '3.1k',
    },
    {
      id: 3,
      image: '/images/meshe_brand_boxes.png',
      tag: 'Made for Every Smile',
      caption: 'For every girl who is healing, growing, changing and becoming herself again. ☕🤍',
      likes: '4.8k',
    },
    {
      id: 4,
      image: '/images/meshe_collection_boxes.png',
      tag: 'The Complete Box Set',
      caption: 'Hydra-Moisturizing • Non-Transfer • Cruelty-Free • 16-Hour Comfort Matte.',
      likes: '3.5k',
    },
  ];

  return (
    <section
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
          <span className="section-tag">Community & Healing</span>
          <h2 className="section-title">See MESHE in the real world.</h2>
          <p className="section-subtitle">
            Tagged by our community. Real smiles, real stories, and unfiltered moments of healing.
          </p>
        </div>

        {/* Editorial Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
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
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* Tag in Top Left */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  zIndex: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--accent-brown)',
                  textTransform: 'uppercase',
                }}
              >
                {post.tag}
              </div>

              {/* Hover Dark Overlay with Warm Earth Tone */}
              <div
                className="social-card-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(51, 32, 28, 0.76)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
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
                      color: 'var(--pastel-peach)',
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
            <InstagramIcon size={18} color="var(--accent-brown)" />
            <span>Follow {BRAND.instagramHandle}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>

      <style>{`
        .social-card:hover .social-card-img {
          transform: scale(1.05);
        }
        .social-card:hover .social-card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
