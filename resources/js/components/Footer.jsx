import React from "react";
import "../../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <span>
          © {new Date().getFullYear()} | All rights reserved by{" "}
          <strong>14-adrian</strong>
        </span>
        <a
          href="https://github.com/14-adrian"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-github"
        >
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}