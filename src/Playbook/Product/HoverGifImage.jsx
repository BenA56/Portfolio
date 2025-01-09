import React, { useState } from 'react';
import "./HoverGifImage.css";

const HoverGifImage = ({ 
  staticImage, 
  gifImage, 
  alt = 'Hover image', 
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className={`hover-gif-container`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img 
        src={isHovering ? gifImage : staticImage} 
        alt={alt}
        className="w-full h-auto object-cover transition-all duration-300"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default HoverGifImage;