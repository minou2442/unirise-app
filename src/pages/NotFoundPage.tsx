import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/UI/Button';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Update document title
  useEffect(() => {
    document.title = 'UniRise - Page Not Found';
  }, []);
  
  return (
    <div className="container mx-auto max-w-md py-12 px-4 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      <h1 className="text-9xl font-extrabold mb-4 text-yellow-500">404</h1>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">
          <Home size={20} className="mr-2" />
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;