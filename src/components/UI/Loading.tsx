import React from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const { t } = useLanguage();

  const sizeMap = {
    sm: 20,
    md: 32,
    lg: 48,
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 
        className="animate-spin text-yellow-500" 
        size={sizeMap[size]} 
      />
      {showText && (
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {t('loading')}
        </p>
      )}
    </div>
  );
};

export default Loading;