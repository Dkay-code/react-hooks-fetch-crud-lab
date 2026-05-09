import React from "react";

const PHONE = "06 XX XX XX XX";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Disponible maintenant
            </div>

            <h1 className="hero-title">
              Votre Expert<br />
              <span className="hero-title-accent">Plombier</span> &<br />
              <span className="hero-title-accent">Chauffagiste</span>
            </h1>

            <p className="hero-desc">
              Intervention rapide sur toute la région parisienne.<br />
              Devis gratuit, prix transparents, travaux garantis.
            </p>

            <div className="hero-actions">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn btn-primary">
                <PhoneIcon />
                Appeler maintenant
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo("services")}
              >
                Nos services
                <ArrowIcon />
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <span className="hero-stat-number">+15</span>
                <span className="hero-stat-label">Ans d'expérience</span>
              </div>
              <div>
                <span className="hero-stat-number">+1k</span>
                <span className="hero-stat-label">Clients satisfaits</span>
              </div>
              <div>
                <span className="hero-stat-number">24h</span>
                <span className="hero-stat-label">Disponibilité / 7j</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-urgency">
                <span>🔴</span> Urgence plomberie
              </div>

              <h3 className="hero-card-title">Besoin d'une intervention ?</h3>

              <ul className="hero-services-list">
                {[
                  "Fuite d'eau — Intervention express",
                  "Chaudière en panne",
                  "Débouchage canalisation",
                  "Radiateur hors service",
                  "Chauffe-eau / Ballon d'eau chaude",
                ].map((item) => (
                  <li key={item}>
                    <span className="hero-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hero-phone-btn">
                <PhoneIcon />
                {PHONE}
              </a>
              <p className="hero-card-sub">Appel gratuit · Devis sans engagement</p>
            </div>

            <div className="hero-floating hero-floating-1">
              <div className="hero-floating-icon" style={{ background: "rgba(245,158,11,0.1)" }}>
                <StarIcon />
              </div>
              <div className="hero-floating-text">
                <strong>4,9 / 5</strong>
                <span>Avis Google</span>
              </div>
            </div>

            <div className="hero-floating hero-floating-2">
              <div className="hero-floating-icon" style={{ background: "rgba(15,45,107,0.1)" }}>
                <ShieldIcon style={{ color: "#0f2d6b" }} />
              </div>
              <div className="hero-floating-text">
                <strong>Artisan certifié</strong>
                <span>Garantie décennale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
