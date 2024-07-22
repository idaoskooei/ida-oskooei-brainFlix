import './header.scss';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
                <img src={BrainFlixLogo} alt='brainflix logo' className='header__logo'/>
            </Link>
            <div className='header__nonmobile-container'>
                <div className='header__mobile-container'>
                    <div className='header__search-container'>
                        <span className='header__search-icon'></span>
                        <input type='text' placeholder='Search' className='header__search'/>
                    </div>
                    <div className='header__avatar'></div>
                </div>
                <button className='header__button'>
                    <Link to="/upload" className='header__button-link'>UPLOAD</Link>
                </button>
                <div className='header__avatar header__avatar--nonmobile'></div>
            </div>
        </header>
    );
}

export default Header;
