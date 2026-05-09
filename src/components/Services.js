import React from "react";

const services = [
  {
    title: "Plomberie Générale",
    desc: "Réparation de fuites, remplacement de robinetterie, installation de sanitaires, réparation de tuyaux — interventions rapides pour tous vos besoins en plomberie.",
    color: "#e0f2fe",
    iconColor: "#0284c7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "Chauffage & Chaudière",
    desc: "Installation, entretien et dépannage de chaudières gaz, fuel ou condensation. Contrats d'entretien annuel et révision complète pour votre sécurité.",
    color: "#fff7ed",
    iconColor: "#ea580c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
      </svg>
    ),
  },
  {
    title: "Dépannage Urgent 24h/24",
    desc: "Fuite catastrophique, panne de chauffage en hiver, canalisation bouchée — notre équipe intervient en urgence 24h/24, 7j/7 pour limiter les dégâts.",
    color: "#fef2f2",
    iconColor: "#dc2626",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Installation Sanitaire",
    desc: "Pose de baignoires, douches, WC suspendus, lavabos et vasques. Nous assurons l'installation complète de vos équipements sanitaires avec finition parfaite.",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16"/>
        <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        <path d="M9 12v6a3 3 0 006 0v-6"/>
        <path d="M4 20h2"/>
        <path d="M18 20h2"/>
      </svg>
    ),
  },
  {
    title: "Rénovation Salle de Bain",
    desc: "Transformation complète de votre salle de bain : démolition, carrelage, plomberie, électricité, peinture. Nous gérons votre projet de A à Z.",
    color: "#faf5ff",
    iconColor: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "Détartrage & Débouchage",
    desc: "Débouchage de canalisations par hydrocurage haute pression, détartrage de chauffe-eau, inspection caméra des réseaux. Résultats garantis.",
    color: "#f0f9ff",
    iconColor: "#0369a1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M8 12H4"/>
        <path d="M20 12h-4"/>
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Nos prestations</span>
          <h2 className="section-title">Tous vos besoins,<br />une seule entreprise</h2>
          <p className="section-subtitle">
            De la fuite d'eau urgente à la rénovation complète de salle de bain,
            SanitExpress vous accompagne avec expertise et réactivité.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon" style={{ background: service.color, color: service.iconColor }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button
                className="service-card-link"
                onClick={() => scrollTo("contact")}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}
              >
                Demander un devis <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
