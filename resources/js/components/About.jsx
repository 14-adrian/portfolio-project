import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDog, faLanguage } from '@fortawesome/free-solid-svg-icons'




function About ({ t }) {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>{t("about") || "About Me"}</h2>
        <FontAwesomeIcon icon={faCode} color="red" />
        <p>{t("aboutDescription") || "..."}</p>
      </div>
    </section>
  );
}

export default About;