import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', hover = true, gradient = false, style }: CardProps) {
  const baseStyles = 'rounded-2xl p-8 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const gradientStyles = gradient
    ? 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
    : 'bg-white border border-gray-100';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`} style={style}>
      {children}
    </div>
  );
}
