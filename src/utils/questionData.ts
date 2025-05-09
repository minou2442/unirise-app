import { useLanguage, Language } from '../contexts/LanguageContext';

// Define question categories and their options
const questionOptions = {
  interest: ['Technology', 'Biology', 'Economics', 'Literature', 'Arts', 'Mathematics', 'Chemistry', 'Psychology'],
  strength: ['Problem-solving', 'Memorization', 'Creativity', 'Logic', 'Communication', 'Research'],
  study: ['Alone', 'In a group', 'With hands-on projects', 'Remote learning'],
  motivation: ['Helping others', 'Innovation', 'Money', 'Prestige', 'Social impact'],
  vision: ['In a hospital', 'In an office', 'In a lab', 'In court', 'In an art studio', 'In an educational institution'],
  skills: ['Leadership skills', 'Technical skills', 'Communication skills', 'Analytical skills'],
  values: ['Job stability', 'Flexibility', 'Professional growth', 'Work-life balance'],
  challenges: ['Solving complex problems', 'Working with people', 'Creative innovation', 'Scientific analysis']
};

// Arabic translations for options
const arabicOptions = {
  interest: ['التكنولوجيا', 'البيولوجيا', 'الاقتصاد', 'الآداب', 'الفنون', 'الرياضيات', 'الكيمياء', 'علم النفس'],
  strength: ['حل المشكلات', 'الحفظ والتذكر', 'الإبداع والابتكار', 'المنطق والتحليل', 'التواصل', 'البحث العلمي'],
  study: ['بمفردي', 'ضمن مجموعة', 'بمشاريع تطبيقية', 'بالتعلم عن بعد'],
  motivation: ['مساعدة الآخرين', 'الابتكار والتجديد', 'المال والربح', 'الهيبة والمكانة', 'التأثير المجتمعي'],
  vision: ['في مستشفى', 'في مكتب', 'في مختبر', 'في المحكمة', 'في استوديو فني', 'في مؤسسة تعليمية'],
  skills: ['مهارات القيادة', 'مهارات التقنية', 'مهارات التواصل', 'مهارات التحليل'],
  values: ['الاستقرار الوظيفي', 'المرونة', 'التطور المهني', 'التوازن بين العمل والحياة'],
  challenges: ['حل المشكلات المعقدة', 'العمل مع الناس', 'الابتكار الإبداعي', 'التحليل العلمي']
};

// Hook to get questions with translated options
export const useQuestionData = () => {
  const { language } = useLanguage();
  
  const getOptions = (category: keyof typeof questionOptions, lang: Language) => {
    if (lang === 'ar') {
      return arabicOptions[category];
    }
    return questionOptions[category];
  };
  
  // Get all question keys for iteration
  const questionKeys = Object.keys(questionOptions) as Array<keyof typeof questionOptions>;
  
  return {
    questionKeys,
    getOptions,
  };
};