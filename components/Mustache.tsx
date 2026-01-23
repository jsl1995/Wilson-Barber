import React from 'react';

interface MustacheProps {
  className?: string;
}

const Mustache: React.FC<MustacheProps> = ({ className = "w-24 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 200 60" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern 
          id="diagonalHatch" 
          patternUnits="userSpaceOnUse" 
          width="8" 
          height="8" 
          patternTransform="rotate(45)"
        >
          <rect width="4" height="8" transform="translate(0,0)" fill="currentColor" />
        </pattern>
      </defs>
      
      {/* Handlebar Shape filled with diagonal stripes */}
      <path 
        d="M100 25 C 125 25 145 35 160 30 C 175 25 190 10 195 15 C 200 20 195 35 180 40 C 160 48 130 50 100 45 C 70 50 40 48 20 40 C 5 35 0 20 5 15 C 10 10 25 25 40 30 C 55 35 75 25 100 25 Z" 
        fill="url(#diagonalHatch)"
      />
      
      {/* Optional: Add a solid outline if visibility is low, but for this specific look, the hatch is the fill */}
    </svg>
  );
};

export default Mustache;