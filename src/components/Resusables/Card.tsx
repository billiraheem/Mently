import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  padded?: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  bordered = false,
  padded = true,
  hoverable = false,
}) => {
  const baseClasses = ' rounded-md';
  const borderClass = bordered ? 'border border-gray-200' : '';
  const paddingClass = padded ? 'pt-2 px-2' : '';
  const hoverClass = hoverable ? 'hover:shadow-md transition-shadow' : '';
  
  return (
    <div className={`${baseClasses} ${borderClass} ${paddingClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;