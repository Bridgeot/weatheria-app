import { Link } from 'react-router-dom';

import logo from '../../assets/weatheria-logo.png';

import '../../styles/Header.css';

function Header() {
    return (
        <nav>
            <Link to='/'>
                <img id='logo-img' src={logo} alt='weatheria logo' />
            </Link>
            <div className='links-align'>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/report'>Report</Link>
                <Link to='/checklist'>Checklist</Link>
            </div>
        </nav>
    );
}

export default Header;