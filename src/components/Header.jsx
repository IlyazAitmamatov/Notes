import React from 'react';
import '../styleSheet/styleComponents/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>

            {/* headerLogoNavBar */}
            <div className="headerLogoNavBar">
                {/* logo */}
                <div className="logo">
                    <Link className='logo_inner' to={'/'}>ZamZam</Link>
                </div>

                {/* navBAr */}
                <nav className="nav">
                    <Link className='nav_inner' to={'/'}>Главная</Link>    
                    <Link className='nav_inner' to={'/about'}>О приложении</Link>
                </nav>
            </div>

            <div className="autorezasia">
                <div className="autorezasia_entrance">
                    <span></span>
                </div>
                <div className="autorezasia_regestration">
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
