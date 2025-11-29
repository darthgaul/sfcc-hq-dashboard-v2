import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-ops-surface border border-ops-slate/30 rounded-none shadow-lg p-5 ${className}`}>
      {children}
    </div>
  );
};