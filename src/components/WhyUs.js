import React from "react";

const PHONE = "06 XX XX XX XX";

const features = [
  {
    title: "Intervention en moins de 2h",
    desc: "Nous nous engageons à intervenir rapidement, même en dehors des heures ouvrables, week-ends et jours fériés inclus.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Artisan certifié & assuré",
    desc: "Nos techniciens sont qualifiés RGE, couverts par une assurance décennale et responsabilité civile professionnelle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Tarifs transparents",
    desc: "Devis gratuit et détaillé avant toute intervention. Pas de mauvaise surprise : vous acceptez le devis, on intervient.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    title: "Garantie sur les travaux",
    desc: "Tous nos travaux sont garantis. En cas de problème après notre intervention, nous revenons sans frais supplémentaires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

const zones = [
  "Paris (75) — Tous arrondissements",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Val-d'Oise (95)",
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="why-us" id="pourquoi-nous">
      <div className="container">
        <div className="why-us-inner">
          <div className="why-us-content">
            <span className="section-tag">Pourquoi nous choisir</span>
            <h2 className="section-title">L'expertise au service de votre confort</h2>
            <p className="section-subtitle">
              Depuis plus de 15 ans, SanitExpress accompagne les particuliers et professionnels
              avec des prestations de qualité et une réactivité sans égale.
            </p>

            <div className="why-us-features">
              {features.map((f) => (
                <div className="why-feature" key={f.title}>
                  <div className="why-feature-icon">
                    {f.icon}
                  </div>
                  <div className="why-feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-us-visual">
            <div className="why-us-card">
              <h3 className="why-us-card-title">Zone d'intervention</h3>
              <ul className="why-zone-list">
                {zones.map((z) => (
                  <li key={z}>
                    <span className="zone-dot" />
                    {z}
                  </li>
                ))}
              </ul>

              <div className="why-us-card-cta">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="zone-phone">
                  <PhoneIcon />
                  {PHONE}
                </a>
                <p className="zone-available">Disponible 24h/24 — 7j/7 — Urgences & devis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
