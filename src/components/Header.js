import React, { useState } from "react";

const PHONE = "06 XX XX XX XX";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-inner">
              <div className="header-top-info">
                <div className="header-top-item">
                  <ClockIcon />
                  Disponible 24h/24, 7j/7
                </div>
                <div className="header-top-item">
                  <MapPinIcon />
                  Île-de-France & région parisienne
                </div>
                <div className="header-top-item">
                  <MailIcon />
                  contact@sanitexpress.fr
                </div>
              </div>
              <div className="header-top-social">
                <a href="https://www.instagram.com/sanitexpress741/" target="_blank" rel="noopener noreferrer" aria-label="Instagram SanitExpress">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="header-main-inner">
              <div className="logo">
                <div className="logo-icon">
                  <WrenchIcon />
                </div>
                <div className="logo-text">
                  <h1>SanitExpress</h1>
                  <span>Plombier · Chauffagiste</span>
                </div>
              </div>

              <nav className="nav">
                <a href="#accueil" onClick={e => { e.preventDefault(); scrollTo("accueil"); }}>Accueil</a>
                <a href="#services" onClick={e => { e.preventDefault(); scrollTo("services"); }}>Services</a>
                <a href="#pourquoi-nous" onClick={e => { e.preventDefault(); scrollTo("pourquoi-nous"); }}>Pourquoi nous</a>
                <a href="#avis" onClick={e => { e.preventDefault(); scrollTo("avis"); }}>Avis clients</a>
                <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
              </nav>

              <div className="header-cta">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="cta-phone">
                  <PhoneIcon />
                  {PHONE}
                </a>
              </div>

              <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        <a href="#accueil" onClick={e => { e.preventDefault(); scrollTo("accueil"); }}>Accueil</a>
        <a href="#services" onClick={e => { e.preventDefault(); scrollTo("services"); }}>Services</a>
        <a href="#pourquoi-nous" onClick={e => { e.preventDefault(); scrollTo("pourquoi-nous"); }}>Pourquoi nous</a>
        <a href="#avis" onClick={e => { e.preventDefault(); scrollTo("avis"); }}>Avis clients</a>
        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} style={{ color: "#ff7722", marginTop: "16px" }}>
          📞 {PHONE}
        </a>
      </div>
    </>
  );
}
