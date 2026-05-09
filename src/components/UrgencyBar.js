import React, { useState } from "react";

const PHONE = "06 XX XX XX XX";

export default function UrgencyBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="urgency-bar">
      <div className="urgency-bar-text">
        🚨 Urgence plomberie ou chauffage ? Nous intervenons en moins de 2h, 24h/24.
      </div>
      <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
        Appeler le {PHONE}
      </a>
      <button
        className="urgency-bar-close"
        onClick={() => setVisible(false)}
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
}
