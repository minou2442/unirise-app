import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../UI/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('questions'), path: '/questions' },
    { name: t('about'), path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300
                       bg-white dark:bg-zinc-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo in center for mobile, left for desktop */}
        <div className="flex-1 md:flex md:justify-start justify-center">
          <Link to="/" className="block" onClick={closeMenu} aria-label="UniRise Home">
            <Logo className="h-12 w-auto mx-auto md:mx-0" />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-black dark:text-white" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors duration-200
                        ${location.pathname === link.path 
                          ? 'text-yellow-500 dark:text-yellow-400' 
                          : 'text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Theme and Language toggles */}
        <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200"
            aria-label={theme === 'dark' ? t('light_mode') : t('dark_mode')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200"
            aria-label={t('language')}
          >
            <Globe size={20} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-zinc-800 shadow-lg transition-all duration-300 ease-in-out z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 transition-colors duration-200
                            ${location.pathname === link.path 
                              ? 'text-yellow-500 dark:text-yellow-400' 
                              : 'text-gray-700 dark:text-gray-200'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-zinc-700">
                <button 
                  onClick={() => { toggleTheme(); closeMenu(); }}
                  className="flex items-center py-2 text-gray-700 dark:text-gray-200"
                  aria-label={theme === 'dark' ? t('light_mode') : t('dark_mode')}
                >
                  {theme === 'dark' ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                  {theme === 'dark' ? t('light_mode') : t('dark_mode')}
                </button>
                
                <button 
                  onClick={() => { toggleLanguage(); closeMenu(); }}
                  className="flex items-center py-2 text-gray-700 dark:text-gray-200"
                  aria-label={t('language')}
                >
                  <Globe size={20} className="mr-2" />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;