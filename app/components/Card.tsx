import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  style?: React.CSSProperties;
  glowColor?: 'blue' | 'purple' | 'pink' | 'green';
}

export default function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
  style,
  glowColor = 'blue'
}: CardProps) {
  const baseStyles = 'relative rounded-2xl p-8 transition-all duration-500 group overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-3 cursor-pointer' : '';
  const gradientStyles = gradient
    ? 'bg-gradient-to-br from-white via-gray-50/50 to-white border-2 border-gray-200'
    : 'bg-white border border-gray-100';

  const glowColors = {
    blue: 'before:from-blue-400 before:to-purple-400',
    purple: 'before:from-purple-400 before:to-pink-400',
    pink: 'before:from-pink-400 before:to-red-400',
    green: 'before:from-green-400 before:to-blue-400',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className} before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r ${glowColors[glowColor]} before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500`}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
