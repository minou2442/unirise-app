import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

const Progress: React.FC<ProgressProps> = ({ currentStep, totalSteps }) => {
  const { t } = useLanguage();
  const percent = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('question')} {currentStep} {t('of')} {totalSteps}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {percent}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
        <div
          className="bg-yellow-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;