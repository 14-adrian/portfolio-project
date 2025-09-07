import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        loadTranslations(currentLanguage);
    }, [currentLanguage]);

    const loadTranslations = async (lang) => {
        try {
            const response = await fetch(`/api/translations/${lang}`);
            const data = await response.json();
            setTranslations(data);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    const switchLanguage = (lang) => {
        setCurrentLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    const t = (key) => {
        return translations[key] || key;
    };

    return { t, currentLanguage, switchLanguage };
};