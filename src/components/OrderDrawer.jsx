import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, Sparkles, Truck, Building2, Check, Copy } from 'lucide-react';
import { BRAND, WHATSAPP_PHONE, getWhatsAppBankProofUrl, BANK_PAYMENT_CONFIG } from '../config/siteConfig';

export default function OrderDrawer({ isOpen, onClose, items, onUpdateQty, onRemoveItem, onClearBag }) {
  const [showBankInfo, setShowBankInfo] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp link with all cart items
  const formatCartWhatsAppUrl = () => {
    let msg = `Hi MESHE! I'd like to place an order for:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* (Qty: ${item.quantity}) - ₹${item.price * item.quantity}\n`;
    });
    msg += `\n*Total Amount: ₹${total}*\n`;
    if (total >= 1500) {
      msg += `(Eligible for Complimentary Keepsake Pouch & Free Express Shipping!)\n`;
    }
    msg += `\nPlease confirm availability and payment details. Thank you!`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  const cartSummaryTitle = items.map((i) => `${i.name} (x${i.quantity})`).join(', ');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="overlay-enter"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(51, 32, 28, 0.45)',
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Drawer Panel */}
      <div
        className="drawer-enter"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '-10px 0 40px rgba(51, 32, 28, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.75rem',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-champagne)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-brown)',
                fontWeight: 600,
              }}
            >
              Healing Order Bag
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: 'var(--accent-brown)',
                lineHeight: 1.1,
              }}
            >
              Your Selection ({totalQty})
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Bag"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(107, 74, 64, 0.15)',
              background: '#FFFFFF',
              color: 'var(--accent-brown)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping & Pouch Banner */}
        <div
          style={{
            padding: '0.75rem 1.75rem',
            backgroundColor: 'rgba(232, 185, 165, 0.25)',
            borderBottom: '1px solid rgba(107, 74, 64, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.78rem',
            color: 'var(--accent-brown)',
            fontWeight: 500,
          }}
        >
          <Truck size={15} />
          <span>
            {total >= 1500
              ? 'Unlocked: Free Express Delivery + Complimentary Pouch!'
              : `Add ₹${Math.max(0, 1500 - total)} more for Free Express Delivery!`}
          </span>
        </div>

        {/* Item List (Scrollable) */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--text-muted)',
                padding: '3rem 1rem',
              }}
            >
              <Sparkles size={36} color="var(--pastel-rose)" style={{ marginBottom: '1rem', opacity: 0.7 }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--accent-brown)', marginBottom: '0.5rem' }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: '0.86rem', maxWidth: '250px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Discover our five healing shades or select the full collection.
              </p>
              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.82rem' }}
              >
                Browse Healing Shades
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  backgroundColor: 'var(--bg-champagne)',
                  border: '1px solid rgba(107, 74, 64, 0.1)',
                }}
              >
                {/* Product Thumbnail — uncropped */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    overflow: 'hidden',
                    padding: '4px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 'auto', height: '56px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--accent-brown)', fontWeight: 600 }}>
                      {item.name}
                    </h5>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      aria-label="Remove item"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '2px',
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    {item.tone || item.stage || 'Full 5-Shade Set'}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                      ₹{item.price * item.quantity}
                    </span>

                    {/* Qty Counter */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '9999px',
                        padding: '0.2rem 0.6rem',
                        border: '1px solid rgba(107, 74, 64, 0.15)',
                      }}
                    >
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Area */}
        {items.length > 0 && (
          <div
            style={{
              padding: '1.4rem 1.75rem',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.15rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Subtotal
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                ₹{total}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <a
              href={formatCartWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-shimmer"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '0.92rem',
                marginBottom: '0.65rem',
              }}
            >
              <MessageSquare size={18} />
              <span>Checkout via WhatsApp</span>
            </a>

            {/* Direct Bank Option Toggle */}
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setShowBankInfo(!showBankInfo)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-brown)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Building2 size={13} />
                <span>Pay via Direct Bank Payment</span>
              </button>
            </div>

            {showBankInfo && (
              <div
                style={{
                  marginTop: '0.85rem',
                  padding: '1rem',
                  borderRadius: '14px',
                  backgroundColor: 'var(--bg-champagne)',
                  border: '1px solid rgba(107, 74, 64, 0.16)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <Building2 size={15} color="var(--accent-brown)" />
                  <strong style={{ color: 'var(--accent-brown)', fontSize: '0.84rem' }}>
                    Direct UPI & Bank Payment
                  </strong>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '0.75rem', marginBottom: '0.75rem', border: '1px solid rgba(107, 74, 64, 0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(107, 74, 64, 0.08)' }}>
                    <div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>UPI ID (GPay / PhonePe / Paytm):</span>
                      <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent-brown)', fontSize: '0.82rem' }}>
                        khushibalgovind31@okhdfcbank
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('khushibalgovind31@okhdfcbank', 'upi')}
                      style={{
                        padding: '0.25rem 0.55rem',
                        fontSize: '0.7rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(107, 74, 64, 0.2)',
                        backgroundColor: copiedField === 'upi' ? '#2E7D32' : 'var(--bg-champagne)',
                        color: copiedField === 'upi' ? '#FFF' : 'var(--accent-brown)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                      }}
                    >
                      {copiedField === 'upi' ? <Check size={11} /> : <Copy size={11} />}
                      <span>{copiedField === 'upi' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>UPI Number:</span>
                      <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent-brown)', fontSize: '0.82rem' }}>
                        9971722802
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('9971722802', 'phone')}
                      style={{
                        padding: '0.25rem 0.55rem',
                        fontSize: '0.7rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(107, 74, 64, 0.2)',
                        backgroundColor: copiedField === 'phone' ? '#2E7D32' : 'var(--bg-champagne)',
                        color: copiedField === 'phone' ? '#FFF' : 'var(--accent-brown)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                      }}
                    >
                      {copiedField === 'phone' ? <Check size={11} /> : <Copy size={11} />}
                      <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <p style={{ fontSize: '0.72rem', color: 'var(--accent-brown)', marginBottom: '0.65rem' }}>
                  Pay ₹{total} to the details above, then share the screenshot on WhatsApp to confirm your order.
                </p>

                <a
                  href={getWhatsAppBankProofUrl(cartSummaryTitle, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.65rem', fontSize: '0.8rem', justifyContent: 'center' }}
                >
                  <span>Share Receipt on WhatsApp (+91 99717 22802)</span>
                </a>
              </div>
            )}

            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.65rem' }}>
              Direct confirmation with the MESHE founders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
