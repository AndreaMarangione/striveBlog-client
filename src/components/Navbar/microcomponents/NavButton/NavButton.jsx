import React from 'react';
import './navButton.css';

const NavButton = ({ text, onClick }) => {
    return (
        <button onClick={() => onClick(text)}>{text}</button>
    )
}

export default NavButton;
