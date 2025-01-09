import React from 'react';
import "./SidebarTheme.css";

function SidebarTheme(props) {
    const { theme, active, onSectionClick } = props

    return (
        <div className={`sidebar-theme`} onClick={event => onSectionClick(theme.id)}>
            <div className='theme-connector'>
                <div className={`theme-line ${active ? `active-line` : ``}`}></div>
            </div>
            <div className='theme-row'>
                <div className='theme-row-left'>
                    <img src={`/playbook/Theme-Bullet${active ? `-Active` : ``}.svg`}alt="dot" width="12px" height="12px" />
                    <div className={`small ${active ? `active-section` : ``}`}> {theme.title} </div>
                </div>
                <img src="/playbook/Section-Yardline.svg" alt="yardline" className={`section-yardline ${active ? `active-yardline` : ``}`}/>
            </div>
        </div>
    )
}

export default SidebarTheme