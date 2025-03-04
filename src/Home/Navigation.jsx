import React, { useState, useEffect } from "react"
import "./Navigation.css"
import MobileNav from "./MobileNav"

export const Book = ({color}) => (
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{fill: color}} d="M19.6179 12.6965C18.8305 12.6975 18.0627 12.942 17.4199 13.3967C16.777 13.8513 16.2906 14.4937 16.0273 15.2358H6.07498C5.28928 15.2358 4.53575 14.9236 3.98017 14.3681C3.42459 13.8125 3.11247 13.059 3.11247 12.2732C3.11247 11.4875 3.42459 10.734 3.98017 10.1784C4.53575 9.62286 5.28928 9.31074 6.07498 9.31074H16.2322C17.4668 9.31074 18.6509 8.82026 19.524 7.94721C20.397 7.07416 20.8875 5.89005 20.8875 4.65537C20.8875 3.42069 20.397 2.23658 19.524 1.36353C18.6509 0.490475 17.4668 0 16.2322 0H6.07498C5.73825 7.09608e-09 5.41531 0.133766 5.17721 0.371871C4.9391 0.609975 4.80534 0.932915 4.80534 1.26965C4.80534 1.60638 4.9391 1.92932 5.17721 2.16742C5.41531 2.40553 5.73825 2.53929 6.07498 2.53929H16.2322C16.7934 2.53929 17.3316 2.76224 17.7284 3.15908C18.1253 3.55592 18.3482 4.09415 18.3482 4.65537C18.3482 5.21659 18.1253 5.75482 17.7284 6.15166C17.3316 6.5485 16.7934 6.77145 16.2322 6.77145H6.07498C4.61581 6.77145 3.21641 7.3511 2.18462 8.38289C1.15283 9.41467 0.573181 10.8141 0.573181 12.2732C0.573181 13.7324 1.15283 15.1318 2.18462 16.1636C3.21641 17.1954 4.61581 17.775 6.07498 17.775H16.0273C16.2601 18.4333 16.6694 19.015 17.2105 19.4564C17.7515 19.8978 18.4035 20.1819 19.0952 20.2778C19.7868 20.3737 20.4915 20.2776 21.1322 20C21.7729 19.7224 22.325 19.274 22.7281 18.7039C23.1312 18.1337 23.3698 17.4638 23.4178 16.7672C23.4658 16.0706 23.3214 15.3742 23.0004 14.7541C22.6794 14.134 22.1941 13.6141 21.5975 13.2512C21.001 12.8883 20.3161 12.6964 19.6179 12.6965ZM19.6179 17.775C19.3668 17.775 19.1213 17.7006 18.9125 17.5611C18.7037 17.4216 18.541 17.2233 18.4449 16.9913C18.3488 16.7593 18.3236 16.504 18.3726 16.2577C18.4216 16.0114 18.5425 15.7852 18.7201 15.6076C18.8977 15.4301 19.1239 15.3091 19.3702 15.2602C19.6165 15.2112 19.8717 15.2363 20.1037 15.3324C20.3357 15.4285 20.534 15.5912 20.6735 15.8C20.8131 16.0088 20.8875 16.2543 20.8875 16.5054C20.8872 16.842 20.7533 17.1647 20.5152 17.4028C20.2772 17.6408 19.9545 17.7747 19.6179 17.775Z" fill="#F0F5EF"/>
    </svg>
)

export const Briefcase = ({color}) => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={{fill: color}} d="M12.5 11.9531C12.5 12.2984 12.2203 12.5781 11.875 12.5781H8.125C7.77969 12.5781 7.5 12.2984 7.5 11.9531V10.0781H0V15.7031C0 16.7031 0.875 17.5781 1.875 17.5781H18.125C19.125 17.5781 20 16.7031 20 15.7031V10.0781H12.5V11.9531ZM18.125 3.82813H15V1.95313C15 0.953125 14.125 0.078125 13.125 0.078125H6.875C5.875 0.078125 5 0.953125 5 1.95313V3.82813H1.875C0.875 3.82813 0 4.70313 0 5.70313V8.82813H20V5.70313C20 4.70313 19.125 3.82813 18.125 3.82813ZM12.5 3.82813H7.5V2.57813H12.5V3.82813Z" fill="#F0F5EF"/>
    </svg>
)

function Navigation(props) {
    const {selected, setSelected} = props
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showContacts, setShowContacts] = useState(false)
    const [showStaticContacts, setShowStaticContacts] = useState(false)


    function handleWorkClick () {
        setSelected("work")
    }

    function handleStoryClick() {
        setSelected("story")
    }

    function handleContactHover() {
        setShowContacts(true)
    }

    function handleContactLeave() {
        setShowContacts(false)
    }

    function handleStaticContactHover() {
        setShowStaticContacts(true)
    }

    function handleStaticContactLeave() {
        setShowStaticContacts(false)
    }

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 100) {
            setIsVisible(true);
          } 
          else if (currentScrollY < 50) {
            setIsVisible(false);
          }
          
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY]);

    return (
        <React.Fragment>
        
        {/* Static nav at top of hero */}
        <div className="tabContainer static">
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "8px"}}>
                <div onClick={handleWorkClick} className={selected === "work" ? "tabSelected static-tab-selected" : "tabNotSelected static-tab"}>
                    <Briefcase color={"#F0F5EF"} />
                    <div className="button"> Work </div>
                </div>
                <div onClick={handleStoryClick} className={selected === "story" ? "tabSelected static-tab-selected" : "tabNotSelected static-tab"}>
                    <Book color={"#F0F5EF"} />
                    <div className="button"> Story </div>
                </div>
                <div className="nav-divider"></div>
            </div>
            <div onMouseEnter={handleStaticContactHover} onMouseLeave={handleStaticContactLeave} className="tabNotSelected static-tab contact">
                <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
                    <div className="button"> Contact </div>
                    <img src="/home/down-arrow.svg" alt="down" width="16px" height="auto" />
                </div>
                {showStaticContacts ?
                    <div className="contact-links">
                        <div className="web-contact-link">
                            LinkedIn
                            <img src="/utility/link-icon.svg" alt="link" width="16" height="auto" />
                        </div>
                        <div className="web-contact-link">
                            Resume
                            <img src="/utility/link-icon.svg" alt="link" width="16" height="auto" />
                        </div>
                    </div>
                : null}
            </div>
        </div>
        
        {/* nav that's sticky to top when you scroll */}
        <div className={`scroll-nav ${isVisible ? 'visible' : ''}`}>
            <div className="tabContainer glass">
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "8px"}}>
                    <img src="/home/Signature-green.svg" alt="sig" height="32px" width="auto" className="mini-sig"/>
                    <div onClick={handleWorkClick} className={selected === "work" ? "tabSelected" : "tabNotSelected"}>
                        <Briefcase color={"#F0F5EF"} />
                        <div className="button"> Work </div>
                    </div>
                    <div onClick={handleStoryClick} className={selected === "story" ? "tabSelected" : "tabNotSelected"}>
                        <Book color={"#F0F5EF"} />
                        <div className="button"> Story </div>
                    </div>
                    <div className="nav-divider"></div>
                </div>
                <div onMouseEnter={handleContactHover} onMouseLeave={handleContactLeave} className="tabNotSelected contact">
                    <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
                        <div className="button"> Contact </div>
                        <img src="/home/down-arrow.svg" alt="down" width="16px" height="auto" />
                    </div>
                    {showContacts ?
                        <div className="contact-links">
                            <div className="web-contact-link">
                                LinkedIn
                                <img src="/utility/link-icon.svg" alt="link" width="16" height="auto" />
                            </div>
                            <div className="web-contact-link">
                                Resume
                                <img src="/utility/link-icon.svg" alt="link" width="16" height="auto" />
                            </div>
                        </div>
                    : null}
                </div>
            </div>
        </div>

        {/* Mobile Nav - will only display on screens < 600px */}
        <MobileNav selected={selected} handleStoryClick={handleStoryClick} handleWorkClick={handleWorkClick}/>
        
        </React.Fragment>
    )
}

export default Navigation