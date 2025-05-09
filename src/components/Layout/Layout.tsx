import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="flex-grow transition-colors duration-300 
                       dark:bg-zinc-900 bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;