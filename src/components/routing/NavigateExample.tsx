import { useNavigate } from "react-router";

function NavigateExample() {

    const navigate = useNavigate();
    
    return ( <button onClick={() => navigate("/")}>Take me home, country roads</button> );
}

export default NavigateExample;