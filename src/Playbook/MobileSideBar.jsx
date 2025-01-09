import React, { useEffect, useState } from 'react';


const MobileSidebar = ({ products, activeSection, onSectionClick }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currSection, setCurrSection] = useState(null)
  
    const handleButtonClick = () => setModalOpen(!isModalOpen);
    const handleProductClick = (id) => {
      onSectionClick(id);
      setModalOpen(false);
    };

    useEffect(() => {
      let found = false

      for(var i = 0; i < products.length; ++i) {
        const product = products[i]
        if(product.id == activeSection) {
          setCurrSection(product.name)
          found = true
        } else {
          for(var j = 0; j < product.themes.length; ++j) {
            const theme = product.themes[j]
            if(theme.id == activeSection) {
              setCurrSection(theme.title)
              found = true
            }
          }
        }
      }

      if(!found) {
        setCurrSection(null)
      }
    }, [activeSection, products])
  
    return (
      <div className="mobile-sidebar">
        <button className="floating-button button" onClick={handleButtonClick}>
          {currSection ? currSection : "Select Product"}
          <img src="/playbook/yardline.svg" alt="yardline" width="16px" height="auto" style={{marginLeft: "16px"}}/>
        </button>
  
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleButtonClick}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>Select a Product</h3>
              <ul>
                {products.map((product, index) => (
                  <li
                    key={product.id}
                    className={activeSection === product.id ? 'active ' : ' '}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img src={product.logo} className='sidebar-logo' alt="logo" />
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

export default MobileSidebar