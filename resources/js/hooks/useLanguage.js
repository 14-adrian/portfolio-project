import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true); // ← Nuevo estado

    useEffect(() => {
        loadTranslations(currentLanguage);
    }, [currentLanguage]);

    const loadTranslations = async (lang) => {
        setLoading(true); // ← Iniciar loading
        try {
            const response = await fetch(`/api/translations/${lang}`);
            const data = await response.json();
            setTranslations(data);
        } catch (error) {
            console.error('Error loading translations:', error);
        } finally {
            setLoading(false); // ← Finalizar loading
        }
    };

    const switchLanguage = (lang) => {
        setCurrentLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    const t = (key) => {
        return translations[key] || key;
    };

    return { t, currentLanguage, switchLanguage, loading }; // ← Retornar loading
};