import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../config/siteConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ onOpenBag, bagCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // GSAP ScrollTrigger for shrinking & styling navbar on scroll
    const trigger = ScrollTrigger.create({
      start: 'top -40',
      onEnter: () => {
        gsap.to(nav, {
          backgroundColor: 'rgba(247, 239, 232, 0.94)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 6px 24px rgba(107, 74, 64, 0.08)',
          borderBottomColor: 'rgba(107, 74, 64, 0.12)',
          paddingTop: '0.8rem',
          paddingBottom: '0.8rem',
          duration: 0.35,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          backgroundColor: 'rgba(247, 239, 232, 0)',
          backdropFilter: 'blur(0px)',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          borderBottomColor: 'rgba(107, 74, 64, 0)',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          duration: 0.35,
          ease: 'power2.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Handle Mobile Menu Animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, delay: 0.1, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Shades', href: '#shades' },
    { label: 'Collection', href: '#collection' },
    { label: 'Why MESHE', href: '#why-meshe' },
    { label: 'About', href: '#about' },
    { label: 'Social', href: '#social' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={navRef}
        id="main-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          transition: 'border-color 0.3s ease',
          borderBottom: '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
            }}
          >
            <img
              src="/images/logo.png"
              alt="MESHE Logo"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  lineHeight: 1,
                  color: 'var(--accent-brown)',
                }}
              >
                MESHE
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-soft-brown)',
                  marginTop: '3px',
                }}
              >
                Made For Every Smile
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  transition: 'color var(--transition-fast)',
                  position: 'relative',
                  padding: '0.25rem 0',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            {/* Bag / Quick Order Drawer Trigger */}
            <button
              onClick={onOpenBag}
              aria-label="Shopping Bag"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(232, 185, 165, 0.25)',
                border: '1px solid rgba(107, 74, 64, 0.15)',
                color: 'var(--accent-brown)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = 'rgba(232, 185, 165, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(232, 185, 165, 0.25)';
              }}
            >
              <ShoppingBag size={19} />
              {bagCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-brown)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--bg-primary)',
                  }}
                >
                  {bagCount}
                </span>
              )}
            </button>

            {/* Direct Order CTA (Desktop) */}
            <a
              href="#contact"
              className="btn btn-primary btn-shimmer desktop-cta"
              style={{
                padding: '0.65rem 1.6rem',
                fontSize: '0.82rem',
              }}
            >
              Order Now
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-toggle"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(107, 74, 64, 0.18)',
                color: 'var(--accent-brown)',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '5.5rem 2rem 2.5rem',
          }}
        >
          {/* Ambient Background Aura */}
          <div
            className="ambient-glow ambient-blush"
            style={{ width: '320px', height: '320px', top: '10%', right: '-10%' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 1 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--accent-brown)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(107, 74, 64, 0.1)',
                  paddingBottom: '0.65rem',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={20} color="var(--accent-brown)" />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1 }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-shimmer"
              style={{ width: '100%' }}
            >
              Order MESHE — From ₹399
            </a>
            <p
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              Made for Every Smile • 5 Healing Shades
            </p>
          </div>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: var(--accent-brown);
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover {
          color: var(--accent-brown) !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
