import { useTranslation } from "react-i18next";
import "./Services.css";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="services" id="services" data-aos="fade-up">

      <div className="services-container">

        <h2 className="services-title">
          {t("ourServices")}
        </h2>

        <div className="services-grid">

          {/* Lighting */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9 18h6M10 22h4"/>
                <path d="M8 14c-1.7-1.3-3-3.3-3-5.5A7 7 0 0 1 12 2a7 7 0 0 1 7 6.5c0 2.2-1.3 4.2-3 5.5"/>
              </svg>
            </div>
            <h3>{t("lightingTitle")}</h3>
            <p>{t("lightingText")}</p>
          </div>

          {/* Climate */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/>
              </svg>
            </div>
            <h3>{t("climateTitle")}</h3>
            <p>{t("climateText")}</p>
          </div>

          {/* Shutters */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="M3 9h18M3 13h18M3 17h18"/>
              </svg>
            </div>
            <h3>{t("shuttersTitle")}</h3>
            <p>{t("shuttersText")}</p>
          </div>

          {/* Security */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>{t("securityTitle")}</h3>
            <p>{t("securityText")}</p>
          </div>

          {/* Smart Home */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="500">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 11l9-7 9 7"/>
                <path d="M5 10v10h14V10"/>
                <circle cx="12" cy="15" r="2"/>
              </svg>
            </div>
            <h3>{t("automationTitle")}</h3>
            <p>{t("automationText")}</p>
          </div>

          {/* AUDIO */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="600">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <polygon points="5,9 9,9 13,5 13,19 9,15 5,15"/>
                <path d="M16 9a4 4 0 0 1 0 6"/>
                <path d="M19 7a7 7 0 0 1 0 10"/>
              </svg>
            </div>
            <h3>{t("audioTitle")}</h3>
            <p>{t("audioText")}</p>
          </div>

          {/* TV */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="700">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="12" rx="2"/>
                <path d="M8 21h8"/>
              </svg>
            </div>
            <h3>{t("tvTitle")}</h3>
            <p>{t("tvText")}</p>
          </div>

          {/* INTERCOM */}
          <div className="service-card" data-aos="fade-up" data-aos-delay="800">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="6" y="2" width="12" height="20" rx="2"/>
                <circle cx="12" cy="17" r="1"/>
                <path d="M9 6h6"/>
              </svg>
            </div>
            <h3>{t("intercomTitle")}</h3>
            <p>{t("intercomText")}</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;