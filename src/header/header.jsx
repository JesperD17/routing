import './header.css';

import { Link } from 'react-router-dom';

function Header() { // Renamed from 'header' to 'Header'
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/News">News</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/Series">Series</Link>
            <Link to="/Info">Info</Link>
            <Link to="/Sources">Sources</Link>
        </div>
    );
}

export default Header;
