import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';

// Constants
const API_URL = 'http://localhost:5000';

// Types
export interface QuestionAnswers {
  interest: string;
  strength: string;
  study: string;
  motivation: string;
  vision: string;
  skills: string;
  values: string;
  challenges: string;
}

export interface MajorPredictionResponse {
  result: string;
}

// Helper to parse result string into structured data
export const parseResults = (result: string): Array<{major: string, description: string}> => {
  const lines = result.split('\n');
  const predictions: Array<{major: string, description: string}> = [];
  
  let currentMajor = '';
  let currentDescription = '';
  
  lines.forEach(line => {
    // Try to match lines like "1. Major: Description"
    const match = line.match(/^\d+\.\s*(.*?):\s*(.*)$/);
    if (match) {
      currentMajor = match[1].trim();
      currentDescription = match[2].trim();
      
      if (currentMajor && currentDescription) {
        predictions.push({
          major: currentMajor,
          description: currentDescription
        });
      }
    }
  });
  
  return predictions;
};

// API call to predict majors
export const predictMajors = async (answers: QuestionAnswers, language: string): Promise<Array<{major: string, description: string}>> => {
  try {
    const response = await axios.post<MajorPredictionResponse>(
      `${API_URL}/api/predict-major`,
      { 
        answers,
        language // Send the current language to the backend
      }
    );
    
    return parseResults(response.data.result);
  } catch (error) {
    console.error('Error predicting majors:', error);
    throw error;
  }
};