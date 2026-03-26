import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {

  const { t } = useTranslation();

  return (

    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4"/>
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1 className="hero-title">{t("heroTitle")}</h1>

        <p className="hero-text">{t("heroText")}</p>

      </div>

    </section>

  );

}

export default Hero;