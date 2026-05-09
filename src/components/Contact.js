import React, { useState } from "react";

const PHONE = "06 XX XX XX XX";
const EMAIL = "contact@sanitexpress.fr";

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

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

const hours = [
  { day: "Lundi — Vendredi", time: "07h00 — 20h00", open: true },
  { day: "Samedi", time: "08h00 — 18h00", open: true },
  { day: "Dimanche & Jours fériés", time: "Urgences uniquement", open: true },
  { day: "Nuit (20h — 07h)", time: "Urgences uniquement", open: true },
];

const services = [
  "Plomberie générale",
  "Dépannage urgent",
  "Chauffage / Chaudière",
  "Débouchage canalisation",
  "Installation sanitaire",
  "Rénovation salle de bain",
  "Entretien chaudière",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <span className="section-tag">Nous contacter</span>
            <h2 className="section-title">Parlons de votre projet</h2>
            <p>
              Besoin d'un devis, d'un renseignement ou d'une intervention urgente ?
              Contactez-nous par téléphone ou remplissez le formulaire — nous vous répondons sous 2h.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon"><PhoneIcon /></div>
                <div>
                  <div className="contact-method-label">Téléphone</div>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="contact-method-value">{PHONE}</a>
                  <div className="contact-method-sub">Disponible 24h/24 pour les urgences</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon"><MailIcon /></div>
                <div>
                  <div className="contact-method-label">Email</div>
                  <a href={`mailto:${EMAIL}`} className="contact-method-value">{EMAIL}</a>
                  <div className="contact-method-sub">Réponse sous 2 heures</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon"><MapIcon /></div>
                <div>
                  <div className="contact-method-label">Zone d'intervention</div>
                  <div className="contact-method-value">Île-de-France</div>
                  <div className="contact-method-sub">Paris & toute la région parisienne</div>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h4>
                <ClockIcon />
                Horaires d'ouverture
              </h4>
              <div className="contact-hours-grid">
                {hours.map((h) => (
                  <div className="hours-row" key={h.day}>
                    <strong>{h.day}</strong>
                    <span className="hours-open">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <CheckCircleIcon />
                </div>
                <h3>Message envoyé !</h3>
                <p>
                  Merci {form.nom} ! Nous avons bien reçu votre demande et nous
                  vous recontacterons dans les plus brefs délais.<br />
                  Pour une urgence, appelez directement le {PHONE}.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "24px",
                    padding: "12px 28px",
                    background: "var(--accent)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                  }}
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Demande de devis gratuit</h3>
                <p className="contact-form-sub">Réponse garantie sous 2 heures · Sans engagement</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Nom complet *</label>
                      <input
                        className="form-input"
                        type="text"
                        name="nom"
                        placeholder="Jean Dupont"
                        value={form.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Téléphone *</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="telephone"
                        placeholder="06 00 00 00 00"
                        value={form.telephone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="votre@email.fr"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Type de prestation *</label>
                      <select
                        className="form-select"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">Décrivez votre problème *</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="Décrivez votre problème ou votre projet en quelques lignes..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="form-submit">
                    <SendIcon />
                    Envoyer ma demande de devis
                  </button>
                  <p className="form-privacy">
                    🔒 Vos données sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
