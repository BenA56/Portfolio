import React, {useRef, useState, useEffect} from "react"
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import "./Playbook.css"
import MobileSidebar from "./MobileSideBar";
import { useNavigate } from "react-router-dom";
import { products } from "./products";

function Playbook(props) {
    const [activeSection, setActiveSection] = useState('')
    const contentRef = useRef(null)

    const navigate = useNavigate()
    const [showButtonA, setShowButtonA] = useState(true);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const product = products.find(product => 
                  product.id === sectionId || product.themes.some(theme => theme.id === sectionId)
                );
                
                if (product) {
                  if (sectionId === product.id) {
                    // If it's the product introduction, highlight the product
                    setActiveSection(product.id);
                  } else {
                    // If it's a theme, highlight the theme
                    setActiveSection(sectionId);
                  }
                }
              }
            })
          },
          { threshold: 0.1 }
        )
    
        const sections = contentRef.current?.querySelectorAll('[id]')
        sections?.forEach((section) => observer.observe(section))
    
        return () => observer.disconnect()
    }, [])
  
    useEffect(() => {
      const handleScroll = () => {
        // Show button A when at top, hide when scrolled down
        // You can adjust the scroll threshold (100 here) as needed
        if (window.scrollY > 100) {
          setShowButtonA(false);
        } else {
          setShowButtonA(true);
        }
      };
  
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    function handleBack() {
        navigate("/")
    }

    console.log(activeSection)

    return (
        <div className="playbook-page">
            <div className="playbook-container">

                {/* Splotch */}
                <div className="splotch"></div>

                {/* Back button */}
                <div className="back-button-container">
                    <button onClick={handleBack} className={showButtonA ? "back-button tertiary" : "back-button primary"}>
                        {showButtonA ?
                            <img src="/playbook/arrow-left.svg" alt="arrow" height="20px" width="auto" />
                        :
                            <img src="/playbook/arrow-left-white.svg" alt="arrow" height="20px" width="auto" />
                        }
                        Back to Portfolio
                    </button>
                </div>

                {/* Hero */}
                <div className="playbook-hero">
                    <img src="/playbook/Signature.svg" alt="sig" width="92px" height="auto" />
                    <div className="playbook-hero-inner">
                        <img src="/playbook/Playbook.png" alt="playbook" width="282px" height="auto" />
                        <div className="b1"> Welcome to my playbook! In the pages below you'll find design themes that I've uncovered from studying successful products. </div>
                    </div>
                </div>

                {/* Book */}
                <div className="product-navigator">
                    <Sidebar
                        products={products}
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                    />
                    <MobileSidebar
                        products={products}
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                    />
                    <ContentArea
                        products={products}
                        ref={contentRef}
                    />
                </div>
            </div>
        </div>
    )
}

export default Playbook