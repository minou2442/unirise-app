import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { predictMajors, QuestionAnswers } from '../api/majorsApi';
import Button from '../components/UI/Button';
import ResultCard from '../components/Results/ResultCard';
import Loading from '../components/UI/Loading';

const ResultsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<QuestionAnswers | null>(null);
  
  // Update document title
  useEffect(() => {
    document.title = 'UniRise - ' + t('results');
  }, [t]);
  
  // Get saved answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('unirise_answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers) as QuestionAnswers);
    } else {
      // Redirect to questions if no answers are found
      navigate('/questions');
    }
  }, [navigate]);
  
  // Fetch results with React Query
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['predictions', answers, language], // Add language to queryKey
    queryFn: () => answers ? predictMajors(answers, language) : Promise.reject('No answers'),
    enabled: !!answers,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
  
  const handleStartOver = () => {
    localStorage.removeItem('unirise_answers');
    navigate('/questions');
  };
  
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:py-16 animate-fade-in">
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 md:p-8 shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {t('results_title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('results_subtitle')}
        </p>
        
        {isLoading && (
          <div className="py-12">
            <Loading size="lg" />
          </div>
        )}
        
        {isError && (
          <div className="py-12 text-center">
            <div className="text-red-500 mb-6">
              <span className="text-6xl">😕</span>
              <p className="mt-4 text-xl font-medium">{t('error')}</p>
            </div>
            
            <Button
              variant="primary"
              onClick={() => refetch()}
              className="mx-auto"
            >
              <RefreshCw size={20} className={`${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t('retry')}
            </Button>
          </div>
        )}
        
        {data && data.length > 0 && (
          <div className="space-y-4">
            {data.map((result, index) => (
              <ResultCard
                key={index}
                index={index}
                major={result.major}
                description={result.description}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => navigate('/questions')}
        >
          <ArrowLeft size={20} className={`${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {t('previous')}
        </Button>
        
        <Button
          variant="secondary"
          onClick={handleStartOver}
        >
          <RefreshCw size={20} className={`${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {t('start_over')}
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;