import React, { useState, useEffect } from 'react';
import { BRAND } from '../config/siteConfig';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function StickyMobileCta({ onOpenBag, bagCount = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past hero (400px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick order options"
      className="sticky-mobile-bar"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        right: '16px',
        zIndex: 900,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        borderRadius: '9999px',
        padding: '0.65rem 1.25rem',
        boxShadow: '0 12px 35px rgba(45, 20, 15, 0.18)',
        border: '1px solid rgba(115, 26, 41, 0.15)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        animation: 'slideUpBar 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <img
          src="/images/logo.png"
          alt="MESHE"
          style={{ width: '28px', height: '28px', objectFit: 'contain' }}
        />
        <div>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--accent-wine)',
              display: 'block',
              lineHeight: 1,
            }}
          >
            MESHE
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            From ₹399 • 5 Shades
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {bagCount > 0 && (
          <button
            onClick={onOpenBag}
            aria-label="View Order Bag"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(115, 26, 41, 0.08)',
              border: 'none',
              color: 'var(--accent-wine)',
              cursor: 'pointer',
            }}
          >
            <ShoppingBag size={17} />
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-wine)',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {bagCount}
            </span>
          </button>
        )}

        <a
          href="#contact"
          className="btn btn-primary"
          style={{
            padding: '0.55rem 1.15rem',
            fontSize: '0.78rem',
            borderRadius: '9999px',
          }}
        >
          <span>Order Now</span>
          <ArrowRight size={14} />
        </a>
      </div>

      <style>{`
        @keyframes slideUpBar {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @media (max-width: 900px) {
          .sticky-mobile-bar {
            display: flex !important;
          }
        }
      `}</style>
    </aside>
  );
}
