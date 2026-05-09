import React from "react";

const PHONE = "06 XX XX XX XX";
const EMAIL = "contact@sanitexpress.fr";
const YEAR = new Date().getFullYear();

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
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

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
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

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <WrenchIcon />
                </div>
                <div className="footer-logo-text">
                  <h3>SanitExpress</h3>
                  <span>Plombier · Chauffagiste</span>
                </div>
              </div>
              <p className="footer-desc">
                Votre expert plombier chauffagiste disponible 24h/24, 7j/7 sur toute l'Île-de-France.
                Intervention rapide, devis gratuit, travaux garantis.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/sanitexpress741/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Navigation</h4>
              <ul className="footer-links">
                {[
                  { label: "Accueil", id: "accueil" },
                  { label: "Nos services", id: "services" },
                  { label: "Pourquoi nous", id: "pourquoi-nous" },
                  { label: "Avis clients", id: "avis" },
                  { label: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} onClick={e => { e.preventDefault(); scrollTo(link.id); }}>
                      <ChevronIcon />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Nos services</h4>
              <ul className="footer-links">
                {[
                  "Plomberie générale",
                  "Chauffage & chaudière",
                  "Dépannage urgent",
                  "Installation sanitaire",
                  "Rénovation salle de bain",
                  "Débouchage canalisation",
                ].map((s) => (
                  <li key={s}>
                    <a href="#services" onClick={e => { e.preventDefault(); scrollTo("services"); }}>
                      <ChevronIcon />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <PhoneIcon />
                  <div>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                      {PHONE}
                    </a>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>Urgences 24h/24</div>
                  </div>
                </li>
                <li>
                  <MailIcon />
                  <a href={`mailto:${EMAIL}`} style={{ color: "rgba(255,255,255,0.85)" }}>{EMAIL}</a>
                </li>
                <li>
                  <MapIcon />
                  <span>Île-de-France — Paris & banlieue</span>
                </li>
              </ul>

              <div className="footer-emergency">
                <p>Urgence plomberie :</p>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {YEAR} SanitExpress — Tous droits réservés</p>
            <div className="footer-bottom-links">
              <a href="#mentions">Mentions légales</a>
              <a href="#confidentialite">Confidentialité</a>
              <a href="#cgv">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
