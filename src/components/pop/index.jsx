import React, { useState, useEffect } from "react";
import { FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";
import "./styles.css"; 

function PopupWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
        <div className="popup-container">
        <div className="popup">
          <button className="close-btn" onClick={() => setIsVisible(false)}>
            <FaTimes />
          </button>
          <h2>Precisa de ajuda?</h2>
          <p>Entre em contato conosco por telefone.</p>
          <a
            href="tel:+5521968371100"  // Substituímos o link do WhatsApp pelo telefone
            className="phone-popup-button"
          >
            <FaPhone className="phone-icon" /> Ligar agora
          </a>
        </div>
      </div>
      
    )
  );
}

export default PopupWhatsApp;
