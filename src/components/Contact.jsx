import React, { useState } from 'react';
import { PRODUCTS, COLLECTION_OFFER, ORDER_URL, BRAND, getWhatsAppOrderUrl } from '../config/siteConfig';
import { MessageSquare, Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Contact() {
  const [selectedType, setSelectedType] = useState('collection'); // 'collection' or 'single'
  const [selectedShadeId, setSelectedShadeId] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedShadeId);

  const currentPrice = selectedType === 'collection' ? COLLECTION_OFFER.price : selectedProduct.price;
  const currentTitle = selectedType === 'collection' ? 'The Complete MESHE Collection (All 5 Shades)' : `${selectedProduct.name} (Shade ${selectedProduct.shadeNumber})`;
  const orderLink = getWhatsAppOrderUrl(selectedType, currentTitle, currentPrice);

  return (
    <section
      id="contact"
      className="section"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Direct Checkout</span>
          <h2 className="section-title">Ready to find your shade?</h2>
          <p className="section-subtitle">
            Choose your signature shade or secure the complete 5-shade collection with complimentary express delivery.
          </p>
        </div>

        {/* Conversion Hub Box */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-light)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Subtle Luxury Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #945C5D, #731A29, #C5A059, #933B3F)',
            }}
          />

          {/* Toggle: Collection vs Single Shade */}
          <div
            style={{
              marginBottom: '2.5rem',
            }}
            className="order-toggle-grid"
          >
            {/* Option 1: 5-Shade Collection (Featured) */}
            <div
              onClick={() => setSelectedType('collection')}
              style={{
                position: 'relative',
                padding: '1.5rem',
                borderRadius: '18px',
                border: selectedType === 'collection'
                  ? '2px solid var(--accent-wine)'
                  : '1px solid rgba(115, 26, 41, 0.1)',
                backgroundColor: selectedType === 'collection'
                  ? 'rgba(115, 26, 41, 0.03)'
                  : '#FAFAFA',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '16px',
                  backgroundColor: 'var(--accent-wine)',
                  color: '#FFFFFF',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <Sparkles size={11} />
                Most Popular • 20% OFF
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  Complete 5-Shade Vault
                </h4>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: selectedType === 'collection' ? '6px solid var(--accent-wine)' : '2px solid #ccc',
                    backgroundColor: '#fff',
                  }}
                />
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                All 5 iconic lipstick shades + gift box + velvet pouch
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-wine)' }}>
                  ₹1596
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹1995
                </span>
              </div>
            </div>

            {/* Option 2: Individual Shade */}
            <div
              onClick={() => setSelectedType('single')}
              style={{
                position: 'relative',
                padding: '1.5rem',
                borderRadius: '18px',
                border: selectedType === 'single'
                  ? '2px solid var(--accent-wine)'
                  : '1px solid rgba(115, 26, 41, 0.1)',
                backgroundColor: selectedType === 'single'
                  ? 'rgba(115, 26, 41, 0.03)'
                  : '#FAFAFA',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  Single Shade
                </h4>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: selectedType === 'single' ? '6px solid var(--accent-wine)' : '2px solid #ccc',
                    backgroundColor: '#fff',
                  }}
                />
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                Choose any one of your favorite signature colors
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-wine)' }}>
                  ₹399
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  per shade
                </span>
              </div>
            </div>

          </div>

          {/* If Single Shade is selected: show shade picker */}
          {selectedType === 'single' && (
            <div
              style={{
                backgroundColor: 'var(--bg-champagne)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                Select Your Shade:
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {PRODUCTS.map((prod) => {
                  const isCur = selectedShadeId === prod.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedShadeId(prod.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.75rem 0.5rem',
                        borderRadius: '12px',
                        backgroundColor: isCur ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        border: isCur ? '2px solid var(--accent-wine)' : '1px solid var(--border-light)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: prod.colorHex,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}
                      />
                      <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {prod.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Order Summary & Primary CTA */}
          <div
            style={{
              borderTop: '1px solid rgba(115, 26, 41, 0.1)',
              paddingTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Selected Item
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {currentTitle}
                </h4>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Order Total
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: 'var(--accent-wine)' }}>
                  ₹{currentPrice}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 0.7fr',
                gap: '1rem',
              }}
              className="order-buttons-grid"
            >
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shimmer"
                style={{
                  padding: '1.15rem 2rem',
                  fontSize: '0.95rem',
                  gap: '0.75rem',
                }}
              >
                <MessageSquare size={19} />
                <span>Order Now via WhatsApp</span>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '1.15rem 1.5rem',
                  fontSize: '0.9rem',
                  gap: '0.6rem',
                }}
              >
                <InstagramIcon size={18} color="var(--accent-wine)" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Guarantee Note */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.75rem',
                flexWrap: 'wrap',
                paddingTop: '0.75rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Check size={14} color="var(--accent-wine)" /> Instant WhatsApp Confirmation
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Check size={14} color="var(--accent-wine)" /> COD & UPI Accepted
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Check size={14} color="var(--accent-wine)" /> Safe Tamper-Proof Packaging
              </span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .order-toggle-grid {
            grid-template-columns: 1fr !important;
          }
          .order-buttons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
