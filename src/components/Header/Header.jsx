import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
// Importamos la imagen del logo (ajusta la ruta según tu carpeta)
import logoImg from "../../assets/logo-tecnoclima.png"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO - Ahora con imagen directa */}
        <a href="/" className="logo-link">
          <img src={logoImg} alt="Tecnoclima" className="logo-img-tecnoclima" />
        </a>

        {/* NAVIGATION */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {t("services")}
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            {t("projects")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("contact")}
          </a>

          {/* LANGUAGE SWITCH (mobile inside menu) */}
          <div className="language-switch mobile-lang">
            <button
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={i18n.language === "es" ? "active" : ""}
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
          </div>
        </nav>

        {/* LANGUAGE SWITCH DESKTOP */}
        <div className="language-switch desktop-lang">
          <button
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={i18n.language === "es" ? "active" : ""}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
        </div>

        {/* BURGER */}
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;