import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "./MobileNav.css";
import { Book } from './Navigation';
import { Briefcase } from './Navigation';

const MobileNav = (props) => {
    const { selected, handleStoryClick, handleWorkClick } = props
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    function handleStory() {
        handleStoryClick()
        toggleMenu()
    }

    function handleWork() {
        handleWorkClick()
        toggleMenu()
    }

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={toggleMenu}
        className="mobile-menu-button"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="menu-icon" />
        ) : (
          <div className='menu-button-layout'>
            <div className='button'> {selected === "work" ? "Work" : "Story"} </div>
            <Menu className="menu-icon" />
          </div>
        )}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="menu-overlay"
          onClick={toggleMenu}
        />
      )}

      {/* Navigation Menu */}
      <nav className={`mobile-nav-menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <div className="nav-list">
            <img src="/home/Signature-green.svg" alt="sig" height="48px" width="auto" style={{marginBottom: "24px"}}/>
          <button onClick={handleWork} className={"nav-item" + (selected === "work" ? " mobile-selected" : "")}>
            <Briefcase color={"#F0F5EF"} />
            <div className="nav-link">
              Work
            </div>
          </button>
          <button onClick={handleStory} className={"nav-item" + (selected === "story" ? " mobile-selected" : "")}>
            <Book color={"#F0F5EF"} />
            <div className="nav-link">
              Story
            </div>
          </button>
          {/* <div className="nav-item">
            <a href="/playbook" className="nav-link">
              Playbook
            </a>
          </div> */}
            <div className='contact-group'>
                <a className="contact-link" href="/Ben_Arteaga_Resume.pdf" target="_blank">
                    <div> Resume </div>
                    <img src="/utility/link-icon.svg" alt="link" width="24" height="auto" />
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/ben-arteaga-336393190/" target="_blank" rel="noopener noreferrer">
                    <div> LinkedIn </div>
                    <img src="/utility/link-icon.svg" alt="link" width="24" height="auto" />
                </a>
            </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;