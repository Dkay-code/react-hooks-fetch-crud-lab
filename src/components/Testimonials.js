import React from "react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Paris 15e",
    avatar: "ML",
    avatarBg: "#0f2d6b",
    stars: 5,
    text: "Fuite d'eau un dimanche soir, j'étais paniquée. SanitExpress est arrivé en moins d'une heure, a réparé la fuite rapidement et proprement. Prix raisonnable et technicien très professionnel. Je recommande vivement !",
  },
  {
    name: "Thomas B.",
    location: "Boulogne-Billancourt (92)",
    avatar: "TB",
    avatarBg: "#0369a1",
    stars: 5,
    text: "Entretien annuel de ma chaudière gaz + remplacement du circulateur. Travail soigné, respect des délais et explication claire des interventions réalisées. Très satisfait, j'ai signé un contrat d'entretien annuel.",
  },
  {
    name: "Sophie M.",
    location: "Montreuil (93)",
    avatar: "SM",
    avatarBg: "#7c3aed",
    stars: 5,
    text: "Rénovation complète de ma salle de bain. Équipe sérieuse, ponctuelle et très propre dans le travail. Le résultat est magnifique. Devis respecté à l'euro près. Je recommande sans hésitation !",
  },
  {
    name: "Jean-Pierre D.",
    location: "Vincennes (94)",
    avatar: "JD",
    avatarBg: "#059669",
    stars: 5,
    text: "Débouchage canalisation en urgence. Appel le matin, intervention l'après-midi même. Travail efficace avec l'hydrocurage haute pression. Aucun problème depuis. Équipe réactive et sympathique.",
  },
  {
    name: "Isabelle R.",
    location: "Paris 11e",
    avatar: "IR",
    avatarBg: "#dc2626",
    stars: 5,
    text: "Remplacement de mon chauffe-eau en panne un vendredi. Livraison et installation le jour même. Tarif compétitif et travail impeccable. Le technicien a même nettoyé après son passage !",
  },
  {
    name: "Laurent F.",
    location: "Créteil (94)",
    avatar: "LF",
    avatarBg: "#d97706",
    stars: 5,
    text: "Pose d'une douche à l'italienne et reconfiguration de la plomberie. Excellent conseil sur les matériaux, chantier propre et résultat à la hauteur de mes attentes. Je recommande SanitExpress les yeux fermés.",
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="avis">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-tag">Avis clients</span>
          <h2 className="section-title">Ils nous font confiance</h2>
          <p className="section-subtitle">
            Plus de 1 000 clients satisfaits nous recommandent.
            Découvrez leurs témoignages authentiques.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-quote">"</div>
              <Stars count={t.stars} />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.avatarBg }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-rating">
          <div className="rating-source">
            <div className="rating-score">4,9/5</div>
            <div className="rating-stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <div className="rating-label">Google — 127 avis</div>
          </div>
          <div className="rating-source">
            <div className="rating-score">5/5</div>
            <div className="rating-stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <div className="rating-label">Instagram — @sanitexpress741</div>
          </div>
          <div className="rating-source">
            <div className="rating-score">+1000</div>
            <div className="rating-stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <div className="rating-label">Clients satisfaits depuis 2009</div>
          </div>
        </div>
      </div>
    </section>
  );
}
