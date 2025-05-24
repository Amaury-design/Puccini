import { useState } from 'react';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    setIsAnimating(true);
    if (onClick) onClick(e);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`relative overflow-hidden px-8 py-3 bg-accent-red text-white font-bold rounded-lg 
        transform transition-all duration-300 hover:scale-105 hover:bg-accent-red/90
        ${isAnimating ? 'scale-95' : ''} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute inset-0 bg-white transform scale-x-0 transition-transform duration-300 
          ${isAnimating ? 'scale-x-100' : ''}`}
        style={{ transformOrigin: 'left' }}
      />
    </button>
  );
};

export default Button; 