import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, SHADE_STORIES, JOURNEY_SUMMARY, getWhatsAppOrderUrl } from '../config/siteConfig';
import { ArrowUpRight, Plus, Check } from 'lucide-react';

export default function Shades({ onAddToCart, onQuickOrder }) {
  const [activeShadeId, setActiveShadeId] = useState(PRODUCTS[0].id);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [addedItem, setAddedItem] = useState(null);

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.product-bottle-img');
    const swatch = card.querySelector('.card-swatch-circle');
    const title = card.querySelector('.card-shade-title');
    if (img) img.style.transform = 'scale(1.05) translateY(-4px)';
    if (swatch) swatch.style.transform = 'scale(1.15)';
    if (title) title.style.transform = 'translateX(3px)';
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.product-bottle-img');
    const swatch = card.querySelector('.card-swatch-circle');
    const title = card.querySelector('.card-shade-title');
    if (img) img.style.transform = 'scale(1) translateY(0)';
    if (swatch) swatch.style.transform = 'scale(1)';
    if (title) title.style.transform = 'translateX(0)';
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  const scrollToProduct = (productId) => {
    setActiveShadeId(productId);
    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="shades"
      className="section"
      style={{
        backgroundColor: 'var(--bg-champagne)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* ================================================================= */}
        {/* 3. SHADE STORY SECTION — PLACED ABOVE/BEFORE THE SHADE DETAILS     */}
        {/* ================================================================= */}
        <div style={{ marginBottom: '5.5rem' }}>
          
          {/* Section Header */}
          <div className="section-header">
            <span className="section-tag">The 5-Stage Healing Journey</span>
            <h2 className="section-title">Every Feeling Has a Story</h2>
            <p className="section-subtitle">
              Our five shades aren't just colours. Each one represents a different feeling, memory, or stage of the healing journey.
            </p>
          </div>

          {/* 5 Healing Stories Cards Grid (Exact Order) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem',
            }}
            className="shade-stories-grid"
          >
            {SHADE_STORIES.map((story, idx) => (
              <div
                key={story.id}
                className="shade-story-card"
                onClick={() => {
                  setActiveStoryIdx(idx);
                  const matchingProduct = PRODUCTS.find((p) => p.name.toLowerCase() === story.name.toLowerCase());
                  if (matchingProduct) scrollToProduct(matchingProduct.id);
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '22px',
                  padding: '1.85rem 1.6rem',
                  border: activeStoryIdx === idx
                    ? '1.5px solid var(--accent-brown)'
                    : '1px solid rgba(107, 74, 64, 0.12)',
                  boxShadow: activeStoryIdx === idx
                    ? '0 14px 32px rgba(107, 74, 64, 0.1)'
                    : '0 6px 20px rgba(107, 74, 64, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Accent Color Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: story.colorHex,
                  }}
                />

                <div>
                  {/* Symbol & Stage Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{story.symbol}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-brown)',
                        backgroundColor: 'rgba(232, 185, 165, 0.25)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(107, 74, 64, 0.1)',
                      }}
                    >
                      Stage 0{story.order}
                    </span>
                  </div>

                  {/* Shade Name & Stage */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: 'var(--accent-brown)',
                      fontWeight: 600,
                      marginBottom: '0.35rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {story.name}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      color: 'var(--accent-soft-brown)',
                      marginBottom: '0.9rem',
                    }}
                  >
                    — {story.stage}
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      lineHeight: 1.5,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {story.tagline}
                  </p>

                  {/* Body Paragraph */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      fontWeight: 300,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {story.body}
                  </p>
                </div>

                {/* Healing Quote */}
                <div
                  style={{
                    borderTop: '1px solid rgba(107, 74, 64, 0.1)',
                    paddingTop: '0.85rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.92rem',
                      fontStyle: 'italic',
                      color: 'var(--accent-brown)',
                      lineHeight: 1.45,
                    }}
                  >
                    “{story.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Journey Reflection Banner */}
          <div
            style={{
              backgroundColor: 'var(--accent-brown)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 3.5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Background Aura */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201, 154, 154, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--pastel-peach)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              And together...
            </span>

            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.4vw, 1.85rem)',
                fontWeight: 600,
                color: '#FAF4EE',
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}
            >
              {JOURNEY_SUMMARY.journeyLine}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.25vw, 1.08rem)',
                lineHeight: 1.75,
                color: '#E8D7C8',
                maxWidth: '720px',
                margin: '0 auto 1.25rem',
                fontWeight: 300,
              }}
            >
              {JOURNEY_SUMMARY.paragraph}
            </p>

            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--pastel-peach)',
                fontWeight: 500,
              }}
            >
              {JOURNEY_SUMMARY.tagline}
            </span>
          </div>

        </div>

        {/* ================================================================= */}
        {/* SHADE DETAILS & PRODUCT CARDS (WITH MOBILE IMAGE CROPPING FIX)   */}
        {/* ================================================================= */}
        <div id="shade-details">
          
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Shade Details & Care</span>
            <h2 className="section-title">Find Your Shade</h2>
            <p className="section-subtitle">
              Comfort with care. Enriched with Shea Butter, Jojoba Oil & Vitamin E.
            </p>
          </div>

          {/* Interactive Shade Selector Swatches */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {PRODUCTS.map((prod) => {
              const isActive = activeShadeId === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => scrollToProduct(prod.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.55rem 1.15rem',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                    border: isActive
                      ? '1.5px solid var(--accent-brown)'
                      : '1px solid rgba(107, 74, 64, 0.12)',
                    boxShadow: isActive
                      ? '0 6px 18px rgba(107, 74, 64, 0.12)'
                      : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: prod.colorHex,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                      display: 'inline-block',
                      transform: isActive ? 'scale(1.2)' : 'scale(1)',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--accent-brown)' : 'var(--text-secondary)',
                    }}
                  >
                    {prod.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 5 Product Cards Grid — RESPONSIVE & COMPLETE IMAGES */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2.25rem',
              alignItems: 'stretch',
            }}
            className="shades-grid"
          >
            {PRODUCTS.map((product) => {
              const isHighlighted = activeShadeId === product.id;
              const isJustAdded = addedItem === product.id;

              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="editorial-product-card"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  style={{
                    position: 'relative',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isHighlighted
                      ? '0 18px 45px rgba(107, 74, 64, 0.12)'
                      : '0 8px 24px rgba(107, 74, 64, 0.05)',
                    border: isHighlighted
                      ? '1.5px solid rgba(107, 74, 64, 0.4)'
                      : '1px solid rgba(107, 74, 64, 0.08)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div>
                    {/* Top Badge & Number */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.85rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.35rem',
                          fontStyle: 'italic',
                          color: 'var(--accent-brown)',
                          fontWeight: 600,
                        }}
                      >
                        0{product.shadeNumber}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-brown)',
                          backgroundColor: 'rgba(232, 185, 165, 0.28)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* 5. PRODUCT IMAGE CONTAINER — IMPORTANT MOBILE FIX
                        • Show complete product image without cutting top, bottom, left, or right
                        • Maintain original aspect ratio
                        • NO fixed height container that crops
                        • Centered and fully visible on mobile
                    */}
                    <div
                      className="product-image-stage"
                      style={{
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.25rem 0',
                        overflow: 'visible',
                      }}
                    >
                      {/* Subtle Radial Aura Behind Lipstick */}
                      <div
                        style={{
                          position: 'absolute',
                          width: '160px',
                          height: '160px',
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${product.colorHex}25 0%, transparent 70%)`,
                          filter: 'blur(20px)',
                          zIndex: 0,
                        }}
                      />

                      {/* Completely Uncropped Lipstick Image */}
                      <img
                        src={product.image}
                        alt={`${product.name} - MESHE Healing Lipstick`}
                        className="product-bottle-img"
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxHeight: '260px',
                          maxWidth: '160px',
                          objectFit: 'contain',
                          position: 'relative',
                          zIndex: 1,
                          display: 'block',
                          margin: '0 auto',
                          filter: 'drop-shadow(0 12px 20px rgba(107, 74, 64, 0.16))',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>

                    {/* Shade Meta & Description */}
                    <div>
                      {/* Swatch & Undertone */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.65rem',
                        }}
                      >
                        <span
                          className="card-swatch-circle"
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: product.colorHex,
                            display: 'inline-block',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                            border: '2px solid #FFFFFF',
                            outline: `1.5px solid ${product.colorHex}`,
                            flexShrink: 0,
                            transition: 'transform 0.25s ease',
                          }}
                        />

                        <div
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.72rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: 'var(--text-muted)',
                            fontWeight: 500,
                          }}
                        >
                          {product.tone}
                        </div>
                      </div>

                      {/* Shade Name */}
                      <h3
                        className="card-shade-title"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.65rem',
                          fontWeight: 600,
                          lineHeight: 1.2,
                          color: 'var(--accent-brown)',
                          marginBottom: '0.4rem',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        {product.name}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.94rem',
                          fontStyle: 'italic',
                          color: 'var(--accent-soft-brown)',
                          lineHeight: 1.45,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.84rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          fontWeight: 300,
                          marginBottom: '1.25rem',
                        }}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(107, 74, 64, 0.08)',
                      paddingTop: '1.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.55rem',
                          fontWeight: 600,
                          color: 'var(--accent-brown)',
                        }}
                      >
                        ₹{product.price}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          marginLeft: '0.35rem',
                          textDecoration: 'line-through',
                        }}
                      >
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {/* Add to Bag */}
                      <button
                        onClick={() => handleAdd(product)}
                        title="Add to order bag"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: isJustAdded ? '#3E6B48' : 'rgba(107, 74, 64, 0.08)',
                          color: isJustAdded ? '#FFFFFF' : 'var(--accent-brown)',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {isJustAdded ? <Check size={18} /> : <Plus size={18} />}
                      </button>

                      {/* Direct WhatsApp Order CTA */}
                      <a
                        href={getWhatsAppOrderUrl('shade', product.name, product.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary card-hover-cta"
                        style={{
                          padding: '0.6rem 1.1rem',
                          fontSize: '0.76rem',
                          gap: '0.35rem',
                        }}
                      >
                        <span>Order</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Banner Driving to Collection */}
          <div
            style={{
              marginTop: '4.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 3.5vw, 2.5rem) 2rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ textAlign: 'left', maxWidth: '580px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: 'var(--accent-brown)',
                  marginBottom: '0.35rem',
                }}
              >
                Experience the Entire 5-Stage Healing Journey
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                From Lost Love to Nevermine. Receive all 5 healing shades in a keepsake presentation set for just <strong>₹1596</strong> (Save ₹399).
              </p>
            </div>

            <a
              href="#collection"
              className="btn btn-primary btn-shimmer"
              style={{ fontSize: '0.85rem', padding: '0.85rem 1.8rem' }}
            >
              Discover The Full Collection
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .shade-stories-grid {
            grid-template-columns: 1fr !important;
          }
          .shades-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
