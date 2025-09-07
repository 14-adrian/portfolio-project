import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import '../../css/language.css';

function Header ({ currentLanguage, switchLanguage, t }) {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <h2>{t('myPortfolio') || 'My Portfolio'}</h2>
                </div>
                <div className="nav-links">
                    <a href="#about">{t('about')}</a>
                    <a href="#projects">{t('projects')}</a>
                    <a href="#skills">{t('skills')}</a>
                    <a href="#contact">{t('contact')}</a>
                </div>
                <div className="radio-inputs">
                    <FontAwesomeIcon icon={faLanguage} style={{ marginRight: '10px', alignSelf: 'center' }} color="black" />
                    <label className="radio">
                        <input
                            type="radio"
                            name="language"
                            checked={currentLanguage === 'es'}
                            onChange={() => switchLanguage('es')}
                        />
                        <span className="name">ES</span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name="language"
                            checked={currentLanguage === 'en'}
                            onChange={() => switchLanguage('en')}
                        />
                        <span className="name">EN</span>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default Header;