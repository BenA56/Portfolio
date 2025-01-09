import React from 'react';
import "./Playbook.css"
import "./PlaybookCTA.css"
import "./Sidebar.css"
import SidebarTheme from './SidebarTheme';
import "./SidebarTheme.css";

const Sidebar = ({ products, activeSection, onSectionClick }) => (
    <div className='sidebar-container'>

      <div className="sidebar">
          <div className='label' style={{color: "#40483E"}}> PRODUCTS </div>
        {products.map((product, index) => {

          const active = activeSection === product.id

          return (
            <div className='product-group'>

              {/* Product */}
              <div
                key={product.id}
                className={`sidebar-item ${active ? 'active' : ''}`}
                onClick={() => onSectionClick(product.id)}
              >
                  <div className='sidebar-product'>
                      <img className='sidebar-logo' alt="logo" src={product.logo} />
                      <div className={`content ${active ? `active-section` : ``}`}> {product.name} </div>
                  </div>

                  <div className='sidebar-right'>
                      <div className={`content ${active ? `active-section` : ``}`}> #{index + 1} </div>
                      <img src="/playbook/Section-Yardline.svg" alt="yardline" className={`section-yardline ${active ? `active-yardline` : ``}`}/>
                  </div>
              </div>

              {/* Themes */}
              <div className='sidebar-themes'>
                {product.themes.map((theme, index) => (
                  <SidebarTheme
                    theme={theme}
                    active={activeSection === theme.id}
                    onSectionClick={onSectionClick}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
);

export default Sidebar