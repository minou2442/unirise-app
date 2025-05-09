import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/UI/Card';
import { Info, BookOpen, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Update document title
  useEffect(() => {
    document.title = 'UniRise - ' + t('about');
  }, [t]);
  
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-16 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        {t('about_title')}
      </h1>
      
      <Card className="p-6 md:p-8 mb-8">
        <div className="flex items-start md:items-center mb-6">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full p-3 mr-4">
            <Info size={24} className="text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('about_description')}
          </h2>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          UniRise is an innovative platform dedicated to helping students in Algeria make informed decisions 
          about their higher education pathways. By leveraging advanced technology and educational expertise, 
          we match students' unique profiles to suitable university majors.
        </p>
        
        <p className="text-gray-700 dark:text-gray-300">
          Our mission is to reduce educational mismatch and empower students to pursue academic paths 
          aligned with their natural abilities, interests, and career aspirations. We believe that when 
          students find the right major, they're more likely to excel academically and professionally.
        </p>
      </Card>
      
      <Card className="p-6 md:p-8 mb-8">
        <div className="flex items-start md:items-center mb-6">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full p-3 mr-4">
            <BookOpen size={24} className="text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('how_it_works')}
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                Complete the Questionnaire
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Answer questions about your interests, academic strengths, study preferences, 
                motivations, workplace vision, skill development goals, career values, and preferred challenges.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                AI Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our algorithm analyzes your responses and matches them against a comprehensive 
                database of majors available in Algerian universities, considering factors 
                like job market trends and educational requirements.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                Receive Personalized Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get a list of top major recommendations tailored to your profile, complete with 
                explanations of why each major might be a good fit for you based on your responses.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 md:p-8">
        <div className="flex items-start md:items-center mb-6">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full p-3 mr-4">
            <Mail size={24} className="text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('contact_us')}
          </h2>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Have questions, feedback, or need support? Our team is here to help! Reach out to us 
          through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-32">Email:</span>
            <a href="mailto:contact@unirise.com" className="text-yellow-600 dark:text-yellow-400 hover:underline">
              contact@unirise.com
            </a>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-32">Phone:</span>
            <span className="text-gray-700 dark:text-gray-300">+213 123 456 789</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-32">Address:</span>
            <span className="text-gray-700 dark:text-gray-300">123 Education Street, Algiers, Algeria</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-32">Social Media:</span>
            <div className="flex space-x-4">
              <a href="https://facebook.com/unirise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                Facebook
              </a>
              <a href="https://instagram.com/unirise" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                Instagram
              </a>
              <a href="https://linkedin.com/company/unirise" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;