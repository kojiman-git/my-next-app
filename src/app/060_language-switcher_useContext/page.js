'use client';  
import LanguageToggle from './components/LanguageToggle';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
    const { language } = useLanguage();
    
    const text = language === 'en' ? 'Hello, World!' : 'こんにちは、世界！';

    return (
        <div>
            <h1>{text}</h1>
            <LanguageToggle />
        </div>
    );
}
