import {Link} from "react-router";

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/props">Props</Link>
            <Link to="/conditional">Conditonal Rendering</Link>
            <Link to="/external">External Data</Link>
        </nav>
    );
}

export default Header;