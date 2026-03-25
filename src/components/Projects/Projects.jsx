import { useTranslation } from "react-i18next";
import "./Projects.css";

function Projects() {

  const { t } = useTranslation();

  return (

    <section className="projects" id="projects" data-aos="fade-up">

      <div className="projects-container" >

        <h2 className="projects-title">{t("projectsTitle")}</h2>

        <div className="projects-grid" data-aos="fade-up" data-aos-delay="100">

          {/* 1 */}
          <div className="project-card">
            <img src="/images/project1.webp" alt="project" />
            <div className="project-info">
              <h3>{t("project1Title")}</h3>
              <p>{t("project1Text")}</p>
            </div>
          </div>

          {/* 2 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/project2.webp" alt="project" />
            <div className="project-info">
              <h3>{t("project2Title")}</h3>
              <p>{t("project2Text")}</p>
            </div>
          </div>

          {/* 3 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/images/project3.webp" alt="project" />
            <div className="project-info">
              <h3>{t("project3Title")}</h3>
              <p>{t("project3Text")}</p>
            </div>
          </div>

          {/* 4 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="400">
            <img src="/images/project4.avif" alt="project" />
            <div className="project-info">
              <h3>{t("project4Title")}</h3>
              <p>{t("project4Text")}</p>
            </div>
          </div>

          {/* 5 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="500">
            <img src="/images/project5.avif" alt="project" />
            <div className="project-info">
              <h3>{t("project5Title")}</h3>
              <p>{t("project5Text")}</p>
            </div>
          </div>

          {/* 6 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="600">
            <img src="/images/project6.jpg" alt="project" />
            <div className="project-info">
              <h3>{t("project6Title")}</h3>
              <p>{t("project6Text")}</p>
            </div>
          </div>

        </div>

      </div>

    </section>

  );

}

export default Projects;