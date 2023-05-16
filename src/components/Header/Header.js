import { Link } from 'react-router-dom';

import logo from '../../assets/weatheria-logo.png';

function Header(props) {
    return (
        <nav>
            <Link to='/'>
                <img id='logo-img' src={logo} alt='weatheria logo' />
            </Link>
            <div className='links-align'>
                <Link to='/'>About</Link>
                <Link to='/geolocation'>Geolocation</Link>
                <Link to='/search'>Search</Link>
                <Link to='/viewhistory'>ViewHistory</Link>
            </div>
        </nav>
    );
}

export default Header;