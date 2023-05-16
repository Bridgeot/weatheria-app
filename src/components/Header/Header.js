import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/geolocation'>Geolocation</Link>
                <Link to='/search'>Search</Link>
                <Link to='/viewhistory'>ViewHistory</Link>
            </nav>
        </header>
    );
}