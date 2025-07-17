import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Footer() {
    const {toggleTheme} = useContext(ThemeContext);
    return (<footer>
        <p>App: {new Date().toISOString()}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </footer>  );
}

export default Footer;