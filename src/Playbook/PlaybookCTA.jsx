import React, {useRef, useState, useEffect} from "react"
import "./PlaybookCTA.css"
import { useNavigate } from "react-router-dom";

const images = [
    "/playbook/Claude.svg",
    "/playbook/Lemonade.svg",
];

const initialScrollPosition = 2300;

function PlaybookCTA(props) {
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(initialScrollPosition);
    const animationRef = useRef(null);
    const startTimeRef = useRef(null);
    const navigate = useNavigate();

    const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = timestamp - startTimeRef.current;
        const duration = 4000; // Total scroll duration in ms
        
        if (isHovering && containerRef.current) {
          const maxScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
          const remainingScroll = maxScroll - initialScrollPosition;
          const percentage = Math.min(progress / duration, 1);
          setScrollPosition(initialScrollPosition + (remainingScroll * percentage));
        }
    
        if (isHovering && progress < duration) {
          animationRef.current = requestAnimationFrame(animate);
        }
    };
    
    useEffect(() => {
        if (isHovering) {
          startTimeRef.current = null;
          animationRef.current = requestAnimationFrame(animate);
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          setScrollPosition(initialScrollPosition);
        }
    
        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        };
    }, [isHovering]);

    function handleClick() {
        navigate("/playbook")
    }

    return (
        <div className="playbook-cta">
            <div className="splotch-cta"></div>
            <div className="playbook-left">
                <div className="l1" style={{color: "#40483E"}}> INTRODUCING ... </div>
                <img src="/playbook/Playbook.png" alt="playbook" width="282px" height="auto" />
                <div className="b1">Uncovering design themes from successful products</div>
                <button
                    className={"playbook-button " + (isHovering ? "hover" : "")}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={handleClick}
                >
                    Open Playbook
                    <img src="/playbook/arrow.svg" alt="arrow" height="20px" width="auto" />
                </button>
            </div>

            <div ref={containerRef} className="image-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleClick}
            >
                {/* Gradient overlays */}
                <div className="gradient-top"></div>
                <div className="gradient-bottom"></div>
                <div className="image-stack" style={{transform: `translateY(-${scrollPosition}px)`}}>
                    {images.map((src, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={src} alt={`Page ${index + 1}`}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlaybookCTA