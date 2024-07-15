import React from 'react';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg'
import './header.scss';

const Header = () => {

    return (
        <header className='header'>
            <a href='./'><img src={BrainFlixLogo} alt='brainflix logo' className='header__logo'/></a>
            <div className='header__nonmobile-container'>
                <div className='header__mobile-container'>
                    <input type='text' placeholder='Search' className='header__search'/>
                    <div className='header__avatar'></div>
                </div>
                <button className='header__button'>UPLOAD</button>
                <div className='header__avatar header__avatar--nonmobile'></div>
            </div>
        </header>
    );
}

export default Header