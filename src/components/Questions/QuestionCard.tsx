import React from 'react';
import Card from '../UI/Card';

interface QuestionCardProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  option,
  isSelected,
  onClick,
}) => {
  return (
    <Card
      selected={isSelected}
      hoverable
      onClick={onClick}
      className="p-6 animate-fade-in"
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0
                       ${isSelected 
                         ? 'bg-yellow-500 border-yellow-500' 
                         : 'border-gray-300 dark:border-gray-600'}`}
        >
          {isSelected && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          )}
        </div>
        <span className={`ml-3 text-base ${isSelected ? 'font-medium' : ''} text-gray-700 dark:text-gray-200`}>
          {option}
        </span>
      </div>
    </Card>
  );
};

export default QuestionCard;