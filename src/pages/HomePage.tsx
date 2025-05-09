import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Update document title
  useEffect(() => {
    document.title = 'UniRise - ' + t('tagline');
  }, [t]);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 transition-colors duration-300 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 text-center md:text-left ${language === 'ar' ? 'md:order-2' : ''}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
                {t('welcome')}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-100">
                {t('tagline')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-200">
                {t('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in animation-delay-300">
                <Link to="/questions">
                  <Button variant="primary" size="lg">
                    {t('start_quiz')}
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    {t('learn_more')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`md:w-1/2 mt-12 md:mt-0 ${language === 'ar' ? 'md:order-1' : ''}`}>
              <div className="relative animate-float">
                <div className="bg-yellow-500 rounded-full h-64 w-64 md:h-80 md:w-80 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap size={120} className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 transition-colors duration-300 bg-white dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('how_it_works')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 text-center hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Answer Questions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tell us about your interests, strengths, and preferences through our simple questionnaire.
              </p>
            </Card>
            
            {/* Feature 2 */}
            <Card className="p-6 text-center hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                AI Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our advanced AI analyzes your answers to find the best match for your unique profile.
              </p>
            </Card>
            
            {/* Feature 3 */}
            <Card className="p-6 text-center hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Get Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive personalized major recommendations tailored specifically to your profile and preferences.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 transition-colors duration-300 bg-yellow-500 text-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to find your perfect major?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take our questionnaire now and discover university majors that match your unique profile.
          </p>
          <Link to="/questions">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-black hover:bg-zinc-800 text-white"
            >
              {t('start_quiz')}
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;