import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  selected = false,
  hoverable = false,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 backdrop-blur-sm';
  const colorClasses = 'bg-white/90 dark:bg-secondary-800/90 shadow-lg dark:shadow-secondary-900/30';
  const selectedClasses = selected ? 'ring-2 ring-primary-500 transform scale-[1.02] shadow-xl' : '';
  const hoverClasses = hoverable ? 'hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-1' : '';
  const cursorClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseClasses} ${colorClasses} ${selectedClasses} ${hoverClasses} ${cursorClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;