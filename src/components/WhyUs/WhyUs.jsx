import { useTranslation } from "react-i18next";
import "./WhyUs.css";

function WhyUs() {

  const { t } = useTranslation();

  return (

    <section className="whyus" id="whyus" data-aos="fade-up">

      <div className="whyus-container">

        <h2 className="whyTitle">{t("whyTitle")}</h2>

        <div className="why-grid">

          <div className="why-item" data-aos="fade-up" data-aos-delay="100">✔ {t("why1")}</div>
          <div className="why-item" data-aos="fade-up" data-aos-delay="200">✔ {t("why2")}</div>
          <div className="why-item" data-aos="fade-up" data-aos-delay="300">✔ {t("why3")}</div>
          <div className="why-item" data-aos="fade-up" data-aos-delay="400">✔ {t("why4")}</div>

        </div>

      </div>

    </section>

  );

}

export default WhyUs;