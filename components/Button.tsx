import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";
  
  const variants = {
    primary: "bg-white hover:bg-neutral-200 text-black border border-transparent font-bold",
    secondary: "bg-brand-charcoal hover:bg-neutral-800 text-white border border-neutral-700",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-sm",
    md: "px-6 py-3 text-sm rounded-sm",
    lg: "px-8 py-4 text-base rounded-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;