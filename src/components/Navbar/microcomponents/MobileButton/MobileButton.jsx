import React from 'react';
import './mobileButton.css';

const MobileButton = ({ onClick }) => {
    return (
        <button className='mobile-button d-flex d-md-none align-items-center justify-content-center z-2 rounded-1 p-1' onClick={onClick}>
            <ion-icon name="menu-sharp"></ion-icon>
        </button>
    )
}

export default MobileButton;
