import React from 'react';
import '../styleSheet/styleComponents/Header.css';
import MyButton from '../ui/button/MyButton'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>

            {/* headerLogoNavBar */}
            <div className="headerLogoNavBar">
                {/* logo */}
                <div className="logo">
                    <Link className='logo_inner' to={'/'}>Notes</Link>
                </div>

                {/* navBAr */}
                <nav className="nav">
                    <Link className='nav_inner' to={'/'}>Главная</Link>    
                    <Link className='nav_inner' to={'/about'}>О приложении</Link>
                </nav>
            </div>

            <div style={{display: 'flex'}} className="loginAvtorisationTheme">
                {/* avtorisation */}
                <div className="avtorisation">
                    <div className="avtorisation_entrance avtorisation_block">
                        <Link to={'/login'} className='avtorisation_hrefOne avtorisation_href'>Логин</Link>
                    </div>
                    <div className="avtorisation_regestration avtorisation_block">
                        <Link to={'regestration'} className='avtorisation_hrefTwo avtorisation_href'>Регестрация</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
