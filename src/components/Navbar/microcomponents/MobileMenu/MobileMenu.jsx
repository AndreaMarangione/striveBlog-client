import React, { useState } from 'react';
import MobileButton from '../MobileButton/MobileButton';
import './mobileMenu.css';

const MobileMenu = ({ onClick }) => {
    const [clicked, setClicked] = useState(false);
    const showMenu = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <MobileButton onClick={showMenu} />
            <div className={`mobile-menu z-1 
            ${clicked ? 'mobile-menu-show' : ''}`}>
                <ul className='navbar-nav d-flex flex-column gap-3 mt-5 pt-3 ps-3'>
                    {['New Blog', 'Login'].map((link, index) =>
                        <li key={link + index} className='nav-item' onClick={() => onClick(link)}>
                            {link}
                        </li>)}
                </ul>
            </div >
        </>
    )
}

export default MobileMenu;
