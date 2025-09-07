import React from 'react';
import "../../css/Hero.css";

function Hero({ t }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{t('welcome') || 'Welcome to My Portfolio'}</h1>
                <p>{t('heroDescription') || 'I am a passionate developer creating amazing web applications'}</p>
                <div className="hero-buttons">
                </div>
            </div>
        </section>
    );
}

export default Hero;