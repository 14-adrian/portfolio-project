import React from "react";
import "../../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faFilePdf,
  faBriefcase,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Contact ({ t }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2>{t("contactTitle") || "Get In Touch"}</h2>
        <div className="contact-list">
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" color="#0A66C2" />
            <a href="https://www.linkedin.com/in/leonidas-adrian-mendoza-823117272/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" color="#2563eb" />
            <span>+503 7735-6173</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" color="#2563eb" />
            <a href="mailto:14leonidas.mendoza@gmail.com">
              14leonidas.mendoza@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" color="#60a5fa" />
            <a href="mailto:mndzaadrian14@gmail.com">
              mndzaadrian14@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" color="#171515" />
            <a href="https://github.com/14-adrian" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="resumes-section">
          <h3>Resumes</h3>
          <div className="resumes-viewers">
            <div className="resume-viewer">
              <FontAwesomeIcon icon={faFilePdf} className="resume-icon" color="#e53e3e" />
              <a href="/docs/CV-Spanish.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
            <div className="resume-viewer">
              <FontAwesomeIcon icon={faFileAlt} className="resume-icon" color="#2563eb" />
              <a href="/docs/Resume-English.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}