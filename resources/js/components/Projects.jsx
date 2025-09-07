import React, { useState } from "react";
import "../../css/ProjectsCarousel.css";

const images = [
  "/img/project1.png",
  "/img/project2.png",
  "/img/project3.png",
  "/img/project4.png",
  "/img/project5.png",
  "/img/project6.png",
];

export default function Projects ({ t }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="projectsCarouselContainer" id="projects">
      <div>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "1rem"
          }}
        >
          {t("projectsTitle") || "Projects"}
        </h2>
        <p style={{ color: "white", textAlign: "center" }}>
          {t("projectsDescription") || "Here are some of my projects"}
        </p>
      </div>
      <div
        className="projectsCarouselSlides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div className="projectsCarouselSlide" key={idx}>
            <img src={src} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>
      <div className="projectsCarouselNav">
        <button
          className="projectsCarouselBtn"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          className="projectsCarouselBtn"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      <div className="projectsCarouselDots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`projectsCarouselDot${current === idx ? " active" : ""
              }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
