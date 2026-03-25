import { useTranslation } from "react-i18next";
import "./Areas.css";

function Areas() {

    const { t } = useTranslation();

    return (
<section className="areas" id="areas" data-aos="fade-up">

            <div className="areas-container">

                <h2 className="areas-title">
                    {t("areasTitle")}
                </h2>

                <p className="areas-description">
                    {t("areasDescription")}
                </p>

                <div className="areas-grid">

                    <div className="area-item" data-aos="fade-up" data-aos-delay="100">Marbella</div>
                    <div className="area-item" data-aos="fade-up" data-aos-delay="200">Sotogrande</div>
                    <div className="area-item" data-aos="fade-up" data-aos-delay="300">Benahavís</div>
                    <div className="area-item" data-aos="fade-up" data-aos-delay="400">Puerto Banús</div>
                    <div className="area-item" data-aos="fade-up" data-aos-delay="500">Costa del Sol</div>

                </div>

            </div>

        </section>

    );

}

export default Areas;