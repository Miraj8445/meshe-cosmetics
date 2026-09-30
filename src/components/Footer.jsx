import React, { useState } from 'react';
import { BRAND } from '../config/siteConfig';
import { ArrowUp, Mail, Check } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#18070B',
        color: '#FDF9F6',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(197, 160, 89, 0.2)',
      }}
    >
      {/* Background Decorative Crest Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/logo-light.png"
          alt="MESHE seal watermark"
          style={{ width: '480px', height: '480px' }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1.2fr',
            gap: '3.5rem',
            paddingBottom: '4.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/logo-light.png"
                alt="MESHE Logo"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    letterSpacing: '0.16em',
                    color: '#FFF',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  MESHE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-light)',
                    marginTop: '4px',
                    display: 'block',
                  }}
                >
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: '#BDB0AC',
                lineHeight: 1.7,
                maxWidth: '320px',
                fontWeight: 300,
                marginBottom: '1.75rem',
              }}
            >
              Five shades crafted with botanical care to flatter every smile. Everyday luxury made effortless, timeless, and completely personal.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-wine)';
                  e.currentTarget.style.borderColor = 'var(--accent-wine)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                aria-label="Email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-wine)';
                  e.currentTarget.style.borderColor = 'var(--accent-wine)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent-gold-light)',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {['Shades', 'Collection', 'Why MESHE', 'About', 'Social', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: '#BDB0AC',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFF')}
                    onMouseLeave={(e) => (e.target.style.color = '#BDB0AC')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent-gold-light)',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {['Privacy Policy', 'Terms & Conditions', 'Shipping Policy', 'Refund & Exchange', 'Track Order'].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: '#BDB0AC',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFF')}
                    onMouseLeave={(e) => (e.target.style.color = '#BDB0AC')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Drop Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent-gold-light)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}
            >
              The Inner Circle
            </h4>
            <p
              style={{
                fontSize: '0.84rem',
                color: '#BDB0AC',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '1.25rem',
              }}
            >
              Subscribe for exclusive secret shade drops, founder notes, and private collection offers.
            </p>

            <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{
                  width: '100%',
                  padding: '0.85rem 3.5rem 0.85rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-gold)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)')}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  width: '40px',
                  borderRadius: '50%',
                  backgroundColor: subscribed ? '#2E7D32' : 'var(--accent-wine)',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {subscribed ? <Check size={16} /> : <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} />}
              </button>
            </form>

            {subscribed && (
              <span style={{ fontSize: '0.74rem', color: 'var(--accent-gold-light)', marginTop: '0.5rem', display: 'block' }}>
                Welcome to the MESHE family.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: '#8C7E7A',
            }}
          >
            © 2026 {BRAND.name}. All rights reserved. Made for Every Smile.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: '#BDB0AC',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#BDB0AC')}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
