import React, { useState } from "react";
import "../../css/SkillsSection.css";

const certificates = [
  "/img/certificate1.png",
  "/img/certificate2.png",
  "/img/certificate3.png",
  "/img/certificate4.png",
];

export default function Skills ({ t }) {
  const [current, setCurrent] = useState(0);

  const prevCert = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCert = () => {
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-content">
        <h2>{t("skillsTitle") || "My Skills"}</h2>
        <div className="skills-columns">
          {/* Izquierda: Explicación y detalles */}
          <div className="skills-info">
            <div className="skills-block">
              <h3>{t("skillsTitle2" || "Skills")}</h3>
              <p>
                {t("skillsDescription") ||
                  "Some description about my skills."}
              </p>
            </div>
            <div className="skills-block">
              <h3>{t("skillsTitle3" || "Technologies")}</h3>
              <ul>
                {Array.isArray(t("skillsInfo"))
                  ? t("skillsInfo").map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                  : null}
              </ul>
            </div>
            <div className="skills-block">
              <h3>{t("skillsTitle4" || "Experience")}</h3>
              <ul>
                {Array.isArray(t("skillsInfo2"))
                  ? t("skillsInfo2").map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                  : null}
              </ul>
            </div>
            <div className="skills-block">
              <h3>{t("skillsTitle5" || "Education")}</h3>
              <ul>
                {Array.isArray(t("studies"))
                  ? t("studies").map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                  : null}
              </ul>
            </div>
          </div>
          {/* Derecha: Elemento para agregar después */}
          <div className="skills-extra">
            <div className="skills-img-grid">
              <img
                src="/img/Laravel.png"
                alt="Laravel"
                className="skills-laravel-img"
                height={140}
              />
              <img
                src="/img/mysql.png"
                alt="Laravel"
                className="skills-laravel-img"
                height={140}
              />
              <img
                src="/img/PHP.png"
                alt="Laravel"
                className="skills-laravel-img"
                height={140}
              />
              <img
                src="/img/React.png"
                alt="Laravel"
                className="skills-laravel-img"
                height={140}
              />
              <img
                src="/img/python.png"
                alt="Laravel"
                className="skills-laravel-img"
                height={140}
              />
              <img
                src="/img/Java.svg"
                alt="Java logo"
                className="skills-java-img"
                height={140}
              />
            </div>
          </div>
        </div>
        {/* Carrusel de certificados */}
        <div
          justifyContent="center"
          alignItems="center"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2>{t("certificatesTitle" || "Certificates")}</h2>
        </div>

        <div className="certificates-carousel">
          <button
            className="carousel-btn"
            onClick={prevCert}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className="carousel-image-wrapper">
            <img
              src={certificates[current]}
              alt={`Certificado ${current + 1}`}
              className="certificate-img"
            />
          </div>
          <button
            className="carousel-btn"
            onClick={nextCert}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
        <div className="carousel-dots">
          {certificates.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${current === idx ? " active" : ""
                }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al certificado ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}