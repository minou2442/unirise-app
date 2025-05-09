import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useQuestionData } from '../utils/questionData';
import Button from '../components/UI/Button';
import QuestionCard from '../components/Questions/QuestionCard';
import Progress from '../components/Questions/Progress';
import toast from 'react-hot-toast';

const QuestionPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { questionKeys, getOptions } = useQuestionData();
  const navigate = useNavigate();
  
  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  // Update document title
  useEffect(() => {
    document.title = 'UniRise - ' + t('questions');
  }, [t]);
  
  // Current question key and options
  const currentQuestionKey = questionKeys[currentQuestion];
  const options = getOptions(currentQuestionKey, language);
  
  // Handle option selection
  const handleSelectOption = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionKey]: option
    }));
  };
  
  // Navigation handlers
  const handleNext = () => {
    if (!answers[currentQuestionKey]) {
      toast.error('Please select an option to continue');
      return;
    }
    
    if (currentQuestion < questionKeys.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      // Scroll to top with smooth animation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Scroll to top with smooth animation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleSubmit = () => {
    if (!answers[currentQuestionKey]) {
      toast.error('Please select an option to continue');
      return;
    }
    
    // Check if all questions have been answered
    const unansweredQuestions = questionKeys.filter(key => !answers[key]);
    
    if (unansweredQuestions.length > 0) {
      toast.error('Please answer all questions before submitting');
      return;
    }
    
    // Save answers to localStorage
    localStorage.setItem('unirise_answers', JSON.stringify(answers));
    
    // Navigate to results
    navigate('/results');
  };
  
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:py-16 animate-fade-in">
      <Progress 
        currentStep={currentQuestion + 1} 
        totalSteps={questionKeys.length} 
      />
      
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 md:p-8 shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {t(currentQuestionKey)}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <QuestionCard
              key={index}
              option={option}
              isSelected={answers[currentQuestionKey] === option}
              onClick={() => handleSelectOption(option)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={currentQuestion === 0 ? 'opacity-0' : ''}
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('previous')}
        </Button>
        
        {currentQuestion < questionKeys.length - 1 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!answers[currentQuestionKey]}
          >
            {t('next')}
            <ArrowRight size={20} className="ml-2" />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!answers[currentQuestionKey]}
          >
            {t('submit')}
            <Check size={20} className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;