import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import Logo from './microcomponents/Logo/Logo';
import NavButton from './microcomponents/NavButton/NavButton';
import useWindowSize from '../../Hooks/useWindowsSize';
import MobileMenu from './microcomponents/MobileMenu/MobileMenu';

const Navbar = () => {
    const { width } = useWindowSize();
    const navigate = useNavigate();
    const handleNavBtn = (button) => {
        switch (button) {
            case 'New Blog':
                navigate('/uploadBlog');
                break;
            case 'Login':
                navigate('/Login');
                break;
        }
    }
    return (
        <nav className='nav-container'>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col d-flex justify-content-between'>
                        <Logo />
                        {width >= 768 ?
                            <div className='d-flex gap-3'>
                                <NavButton text={'New Blog'} onClick={handleNavBtn} />
                                <NavButton text={'Login'} onClick={handleNavBtn} />
                            </div> :
                            <MobileMenu onClick={handleNavBtn} />
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
