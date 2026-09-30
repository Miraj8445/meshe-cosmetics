import React from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, Sparkles, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND, WHATSAPP_PHONE } from '../config/siteConfig';

export default function OrderDrawer({ isOpen, onClose, items, onUpdateQty, onRemoveItem, onClearBag }) {
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
      msg += `(Eligible for Complimentary Velvet Pouch & Free Express Shipping!)\n`;
    }
    msg += `\nPlease confirm availability and payment details. Thank you!`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

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
          backgroundColor: 'rgba(28, 19, 17, 0.45)',
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
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
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
                color: 'var(--accent-wine)',
                fontWeight: 600,
              }}
            >
              Order Bag
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
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
              border: '1px solid var(--border-light)',
              background: '#FFFFFF',
              color: 'var(--text-primary)',
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
            backgroundColor: 'rgba(115, 26, 41, 0.05)',
            borderBottom: '1px solid rgba(115, 26, 41, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.78rem',
            color: 'var(--accent-wine)',
            fontWeight: 500,
          }}
        >
          <Truck size={15} />
          <span>
            {total >= 1500
              ? 'Unlocked: Free Express Delivery + Velvet Pouch!'
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
              <Sparkles size={36} color="var(--accent-rose)" style={{ marginBottom: '1rem', opacity: 0.6 }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: '0.86rem', maxWidth: '240px', marginBottom: '1.5rem' }}>
                Discover our five signature velvet shades or get the full collection.
              </p>
              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.82rem' }}
              >
                Browse Lipsticks
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
                  border: '1px solid var(--border-light)',
                }}
              >
                {/* Product Thumbnail */}
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
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 'auto', height: '56px', objectFit: 'contain' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
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
                    {item.tone || 'Signature Set'}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--accent-wine)' }}>
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
                        border: '1px solid var(--border-light)',
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
              padding: '1.5rem 1.75rem',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Subtotal
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--accent-wine)' }}>
                ₹{total}
              </span>
            </div>

            <a
              href={formatCartWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-shimmer"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '0.92rem',
                marginBottom: '0.75rem',
              }}
            >
              <MessageSquare size={18} />
              <span>Checkout via WhatsApp</span>
            </a>

            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Direct order confirmation with the MESHE founders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
