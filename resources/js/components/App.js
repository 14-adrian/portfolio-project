import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { useLanguage } from '../hooks/useLanguage';

function App() {
    const { t, currentLanguage, switchLanguage } = useLanguage();

    return React.createElement('div', { className: 'app' },
        React.createElement(Header, {
            currentLanguage: currentLanguage,
            switchLanguage: switchLanguage,
            t: t
        }),
        React.createElement(Hero, { t: t }),
        React.createElement(About, { t: t }),
        React.createElement(Projects, { t: t }),
        React.createElement(Skills, { t: t }),
        React.createElement(Contact, { t: t }),
        React.createElement(Footer, { t: t })
    );
}

export default App;