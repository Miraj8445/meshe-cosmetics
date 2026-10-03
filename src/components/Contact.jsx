import React, { useState } from 'react';
import { PRODUCTS, COLLECTION_OFFER, BRAND, getWhatsAppOrderUrl, getWhatsAppBankProofUrl, BANK_PAYMENT_CONFIG } from '../config/siteConfig';
import { MessageSquare, Check, Sparkles, Building2, Copy, ArrowRight, ShieldCheck, Share2 } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Contact() {
  const [selectedType, setSelectedType] = useState('collection'); // 'collection' or 'single'
  const [selectedShadeId, setSelectedShadeId] = useState(PRODUCTS[0].id);
  const [paymentMethod, setPaymentMethod] = useState('whatsapp'); // 'whatsapp' | 'instagram' | 'bank'
  const [copiedField, setCopiedField] = useState(null);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedShadeId) || PRODUCTS[0];

  const currentPrice = selectedType === 'collection' ? COLLECTION_OFFER.price : selectedProduct.price;
  const currentTitle = selectedType === 'collection' ? 'The Complete MESHE Collection (All 5 Shades)' : `${selectedProduct.name} (${selectedProduct.stage})`;
  const orderLink = getWhatsAppOrderUrl(selectedType, currentTitle, currentPrice);
  const bankProofLink = getWhatsAppBankProofUrl(currentTitle, currentPrice);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-tag">Direct Checkout & Healing Care</span>
          <h2 className="section-title">Ready to find your shade?</h2>
          <p className="section-subtitle">
            Choose your shade or secure the complete 5-shade healing collection with complimentary express delivery.
          </p>
        </div>

        {/* Conversion Hub Box */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: 'clamp(1.75rem, 4vw, 3.25rem)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(107, 74, 64, 0.12)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Subtle Healing Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #933B3F, #945C5D, #D4637A, #B17373, #AA606E)',
            }}
          />

          {/* Step 1: Choose Item (Collection vs Single Shade) */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-soft-brown)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Step 1: Select Your Item
            </span>

            <div className="order-toggle-grid">
              {/* Option 1: 5-Shade Collection (Featured) */}
              <div
                onClick={() => setSelectedType('collection')}
                style={{
                  position: 'relative',
                  padding: '1.5rem',
                  borderRadius: '18px',
                  border: selectedType === 'collection'
                    ? '2px solid var(--accent-brown)'
                    : '1px solid rgba(107, 74, 64, 0.12)',
                  backgroundColor: selectedType === 'collection'
                    ? 'rgba(232, 185, 165, 0.15)'
                    : '#FAF7F5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '16px',
                    backgroundColor: 'var(--accent-brown)',
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
                  Complete Journey • 20% OFF
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--accent-brown)' }}>
                    All 5 Healing Shades
                  </h4>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: selectedType === 'collection' ? '6px solid var(--accent-brown)' : '2px solid #ccc',
                      backgroundColor: '#fff',
                    }}
                  />
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Lost Love to Nevermine + keepsake gift pouch
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
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
                    ? '2px solid var(--accent-brown)'
                    : '1px solid rgba(107, 74, 64, 0.12)',
                  backgroundColor: selectedType === 'single'
                    ? 'rgba(232, 185, 165, 0.15)'
                    : '#FAF7F5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--accent-brown)' }}>
                    Single Healing Shade
                  </h4>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: selectedType === 'single' ? '6px solid var(--accent-brown)' : '2px solid #ccc',
                      backgroundColor: '#fff',
                    }}
                  />
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Choose your individual emotional shade
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                    ₹399
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    per shade
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* If Single Shade is selected: show shade picker */}
          {selectedType === 'single' && (
            <div
              style={{
                backgroundColor: 'var(--bg-champagne)',
                borderRadius: '16px',
                padding: '1.25rem',
                marginBottom: '2.5rem',
                border: '1px solid rgba(107, 74, 64, 0.1)',
              }}
            >
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-soft-brown)',
                  marginBottom: '0.85rem',
                }}
              >
                Select Your Shade:
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.65rem',
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
                        gap: '0.35rem',
                        padding: '0.75rem 0.5rem',
                        borderRadius: '12px',
                        backgroundColor: isCur ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                        border: isCur ? '2px solid var(--accent-brown)' : '1px solid rgba(107, 74, 64, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: prod.colorHex,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
                        }}
                      />
                      <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                        {prod.name}
                      </span>
                      <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                        {prod.stage}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 10. PAYMENT OPTIONS — CHOOSE HOW YOU'D LIKE TO PAY               */}
          {/* =============================================================== */}
          <div
            style={{
              borderTop: '1px solid rgba(107, 74, 64, 0.12)',
              paddingTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-soft-brown)',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                Step 2: Payment Method
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: 'var(--accent-brown)',
                  fontWeight: 500,
                }}
              >
                Choose How You’d Like to Pay
              </h3>
            </div>

            {/* 3 Payment Options Tabs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.85rem',
                marginBottom: '1.75rem',
              }}
              className="payment-options-grid"
            >
              {/* Option 1: WhatsApp Order */}
              <button
                type="button"
                onClick={() => setPaymentMethod('whatsapp')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.15rem 0.85rem',
                  borderRadius: '16px',
                  backgroundColor: paymentMethod === 'whatsapp' ? 'rgba(232, 185, 165, 0.2)' : '#FAF7F5',
                  border: paymentMethod === 'whatsapp' ? '2px solid var(--accent-brown)' : '1px solid rgba(107, 74, 64, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <MessageSquare size={22} color="var(--accent-brown)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                  WhatsApp Order
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Instant Confirmation
                </span>
              </button>

              {/* Option 2: Instagram */}
              <button
                type="button"
                onClick={() => setPaymentMethod('instagram')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.15rem 0.85rem',
                  borderRadius: '16px',
                  backgroundColor: paymentMethod === 'instagram' ? 'rgba(232, 185, 165, 0.2)' : '#FAF7F5',
                  border: paymentMethod === 'instagram' ? '2px solid var(--accent-brown)' : '1px solid rgba(107, 74, 64, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <InstagramIcon size={22} color="var(--accent-brown)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                  Instagram
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  DM on Instagram
                </span>
              </button>

              {/* Option 3: Direct Bank Payment */}
              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.15rem 0.85rem',
                  borderRadius: '16px',
                  backgroundColor: paymentMethod === 'bank' ? 'rgba(232, 185, 165, 0.2)' : '#FAF7F5',
                  border: paymentMethod === 'bank' ? '2px solid var(--accent-brown)' : '1px solid rgba(107, 74, 64, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <Building2 size={22} color="var(--accent-brown)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                  UPI / Bank Payment
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  GPay • PhonePe • HDFC
                </span>
              </button>
            </div>

            {/* Content for Selected Payment Option */}
            
            {/* 1. WHATSAPP OPTION */}
            {paymentMethod === 'whatsapp' && (
              <div
                style={{
                  backgroundColor: 'var(--bg-champagne)',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  border: '1px solid rgba(107, 74, 64, 0.12)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <MessageSquare size={20} color="var(--accent-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--accent-brown)', marginBottom: '0.25rem' }}>
                      Fast & Direct WhatsApp Assistance
                    </h5>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Click below to chat directly with our team on +91 99717 22802. We'll confirm your shade, share payment options (UPI, Netbanking, COD), and arrange express delivery.
                    </p>
                  </div>
                </div>

                <a
                  href={orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-shimmer"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.95rem' }}
                >
                  <MessageSquare size={18} />
                  <span>Order Now via WhatsApp (₹{currentPrice})</span>
                </a>
              </div>
            )}

            {/* 2. INSTAGRAM OPTION */}
            {paymentMethod === 'instagram' && (
              <div
                style={{
                  backgroundColor: 'var(--bg-champagne)',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  border: '1px solid rgba(107, 74, 64, 0.12)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <InstagramIcon size={20} color="var(--accent-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--accent-brown)', marginBottom: '0.25rem' }}>
                      Message Us on Instagram {BRAND.instagramHandle}
                    </h5>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Send us a Direct Message with your preferred shade: <strong>{currentTitle}</strong>. Our founders respond personally to all DM orders.
                    </p>
                  </div>
                </div>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-shimmer"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.95rem' }}
                >
                  <InstagramIcon size={18} color="#FFFFFF" />
                  <span>DM on Instagram @meshe.beauty</span>
                </a>
              </div>
            )}

            {/* 3. DIRECT BANK & UPI PAYMENT OPTION */}
            {paymentMethod === 'bank' && (
              <div
                style={{
                  backgroundColor: 'var(--bg-champagne)',
                  borderRadius: '20px',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  border: '1px solid rgba(107, 74, 64, 0.16)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                  <Building2 size={20} color="var(--accent-brown)" />
                  <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--accent-brown)' }}>
                    Direct UPI & Bank Payment Details
                  </h5>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Transfer ₹{currentPrice} directly via Google Pay, PhonePe, Paytm, or any UPI / Netbanking app:
                </p>

                {/* Structured UPI & Bank Fields */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid rgba(107, 74, 64, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {/* UPI ID with One-Click Copy */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '1px solid rgba(107, 74, 64, 0.08)', paddingBottom: '0.75rem' }}>
                    <div>
                      <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block' }}>
                        UPI ID (GPay / PhonePe / Paytm):
                      </span>
                      <span style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--accent-brown)', fontFamily: 'monospace' }}>
                        khushibalgovind31@okhdfcbank
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('khushibalgovind31@okhdfcbank', 'upi')}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        backgroundColor: copiedField === 'upi' ? '#2E7D32' : 'var(--bg-champagne)',
                        color: copiedField === 'upi' ? '#FFF' : 'var(--accent-brown)',
                        border: '1px solid rgba(107, 74, 64, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {copiedField === 'upi' ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedField === 'upi' ? 'Copied!' : 'Copy UPI'}</span>
                    </button>
                  </div>

                  {/* UPI Number with One-Click Copy */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '1px solid rgba(107, 74, 64, 0.08)', paddingBottom: '0.75rem' }}>
                    <div>
                      <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block' }}>
                        Phone / UPI Number:
                      </span>
                      <span style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--accent-brown)', fontFamily: 'monospace' }}>
                        9971722802
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('9971722802', 'phone')}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        backgroundColor: copiedField === 'phone' ? '#2E7D32' : 'var(--bg-champagne)',
                        color: copiedField === 'phone' ? '#FFF' : 'var(--accent-brown)',
                        border: '1px solid rgba(107, 74, 64, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {copiedField === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedField === 'phone' ? 'Copied!' : 'Copy Number'}</span>
                    </button>
                  </div>

                  {/* Payee Name & Bank */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', paddingTop: '0.2rem' }}>
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Account Holder / Name:</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-brown)' }}>Khushi Balgovind</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Bank:</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-brown)' }}>HDFC Bank</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Total Payable:</span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-brown)' }}>₹{currentPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Direct UPI Pay CTA */}
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={`upi://pay?pa=khushibalgovind31@okhdfcbank&pn=Khushi%20Balgovind&am=${currentPrice}&cu=INR&tn=MESHE%20Cosmetics`}
                    className="btn btn-outline"
                    style={{ flex: 1, minWidth: '200px', padding: '0.75rem 1rem', fontSize: '0.88rem', justifyContent: 'center' }}
                  >
                    <span>⚡ Pay via UPI App (GPay / PhonePe / Paytm)</span>
                  </a>
                </div>

                {/* Clear Instruction for Customer */}
                <div
                  style={{
                    backgroundColor: 'rgba(232, 185, 165, 0.22)',
                    borderRadius: '12px',
                    padding: '1rem',
                    border: '1px solid rgba(107, 74, 64, 0.12)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent-brown)', lineHeight: 1.6, fontWeight: 500 }}>
                    💡 <strong>Next Step:</strong> After making the payment of ₹{currentPrice} to <strong>khushibalgovind31@okhdfcbank</strong> or <strong>9971722802</strong>, click below to share the transaction screenshot on WhatsApp (+91 99717 22802) along with your shipping address for instant order confirmation and dispatch.
                  </p>
                </div>

                {/* Primary Action: Share Payment Screenshot */}
                <a
                  href={bankProofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-shimmer"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.92rem', gap: '0.65rem' }}
                >
                  <Share2 size={18} />
                  <span>Share Payment Screenshot on WhatsApp (+91 99717 22802)</span>
                </a>
              </div>
            )}
          </div>

          {/* Order Summary & Final Note */}
          <div
            style={{
              borderTop: '1px solid rgba(107, 74, 64, 0.12)',
              paddingTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Selected Item
              </span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--accent-brown)', marginTop: '2px' }}>
                {currentTitle}
              </h4>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Order Total
              </span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                ₹{currentPrice}
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Check size={14} color="var(--accent-brown)" /> WhatsApp & Direct Bank Payment
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Check size={14} color="var(--accent-brown)" /> 100% Secure Transaction
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Check size={14} color="var(--accent-brown)" /> Safe Tamper-Proof Packaging
            </span>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 680px) {
          .order-toggle-grid {
            grid-template-columns: 1fr !important;
          }
          .payment-options-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
