import React, { useState } from 'react';

const HoverGifImage = ({ 
  staticImage, 
  gifImage, 
  alt = 'Hover image', 
  className = '' 
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className={`hover-gif-container ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img 
        src={isHovering ? gifImage : staticImage} 
        alt={alt}
        className="w-full h-auto object-cover transition-all duration-300"
        width="600px"
        height="auto"
      />
    </div>
  );
};

export default HoverGifImage;