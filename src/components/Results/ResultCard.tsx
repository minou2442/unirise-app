import React from 'react';
import Card from '../UI/Card';

interface ResultCardProps {
  index: number;
  major: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ index, major, description }) => {
  // Animation delay based on index for staggered appearance
  const animationDelay = `${index * 150}ms`;
  
  return (
    <Card 
      className="p-6 animate-fade-in"
      style={{ animationDelay }}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {major}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;