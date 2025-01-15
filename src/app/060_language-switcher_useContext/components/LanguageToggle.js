'use client';  
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}>
            {language === 'en' ? 'Switch to Japanese' : '英語に切り替え'}
        </button>
    );
};

export default LanguageToggle;
