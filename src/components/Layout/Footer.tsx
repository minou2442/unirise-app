import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../UI/Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-sm text-center md:text-left max-w-xs">
              UniRise - {t('tagline')}
            </p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white">{t('learn_more')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  {t('questions')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-white">{t('contact_us')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/unirise" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com/unirise" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/unirise" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-4 text-sm text-center text-gray-500">
          <p>© {currentYear} UniRise. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;