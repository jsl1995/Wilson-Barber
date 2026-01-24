import React from 'react';

interface MustacheProps {
  className?: string;
}

const Mustache: React.FC<MustacheProps> = ({ className = "w-24 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 800 275" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern 
          id="diagonalHatch" 
          patternUnits="userSpaceOnUse" 
          width="20" 
          height="20" 
          patternTransform="rotate(45)"
        >
          <rect width="10" height="20" transform="translate(0,0)" fill="currentColor" />
        </pattern>
      </defs>
      
      {/* Custom mustache shape filled with diagonal stripes */}
      <path 
        d="M797.35 111.562C797.35 111.562 772.911 158.462 727.086 155.117C681.213 151.772 632.334 44.5452 540.611 11.0249C448.911 -22.4954 399.986 31.1171 399.986 31.1171C399.986 31.1171 351.084 -22.4969 259.409 11.0249C167.709 44.5452 118.809 151.772 72.9594 155.117C27.1094 158.462 2.64689 111.562 2.64689 111.562C2.64689 111.562 -12.6359 151.772 30.1859 208.731C72.9594 265.689 192.148 289.639 268.589 265.689C354.136 238.883 399.986 171.891 399.986 171.891C399.986 171.891 442.784 242.251 531.431 265.689C608.702 286.148 727.086 265.689 769.859 208.731C812.633 151.773 797.35 111.562 797.35 111.562Z" 
        fill="url(#diagonalHatch)"
      />
    </svg>
  );
};

export default Mustache;