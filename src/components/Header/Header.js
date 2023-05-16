import { Link } from 'react-router-dom';

import logo from '../../assets/weatheria-logo.png';

function Header(props) {
    return (
        <nav>
            <img id='logo-img' src={logo} alt='weatheria logo' />
            <div className='links-align'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/geolocation'>Geolocation</Link>
                <Link to='/search'>Search</Link>
                <Link to='/viewhistory'>ViewHistory</Link>
            </div>
        </nav>
    );
}

export default Header;