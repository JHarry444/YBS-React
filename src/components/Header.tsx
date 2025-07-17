import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/themeContext";

function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <nav>
            <Link to="/" className={theme}>Home</Link>
            <Link to="/props" className={theme}>Props</Link>
            <Link to="/conditional" className={theme}>Conditonal Rendering</Link>
            <Link to="/external" className={theme}>External Data</Link>
            <Link to="/liftingState" className={theme}>Lifting State</Link>
            <Link to='/kids' className={theme}>Kids</Link>
        </nav>
    );
}

export default Header;