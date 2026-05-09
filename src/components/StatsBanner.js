import React from "react";

const stats = [
  { number: "+15", suffix: "", label: "Ans d'expérience" },
  { number: "+1", suffix: "000", label: "Clients satisfaits" },
  { number: "24h", suffix: "", label: "Disponible 7j/7" },
  { number: "100", suffix: "%", label: "Devis gratuit" },
];

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="stat-divider" />}
              <div className="stat-item">
                <span className="stat-number">
                  {stat.number}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
