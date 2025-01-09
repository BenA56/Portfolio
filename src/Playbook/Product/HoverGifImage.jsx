import React, { useState } from 'react';
import "./HoverGifImage.css";
import "./DesignDetail.css";

const HoverGifImage = ({ 
  staticImage, 
  gifImage, 
  alt = 'Hover image', 
}) => {
  const [isHovering, setIsHovering] = useState(true);

  console.log("isHovering", isHovering)

  return (
    <div 
      className={`hover-gif-container`}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      {/* <div className="hover-signifier">
          <img src="/playbook/play.svg" alt="hover" width="16px" height="16px" />
          <div>Hover/Tap to Play</div>
      </div> */}
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