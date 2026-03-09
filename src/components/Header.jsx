import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(){

const navigate = useNavigate();

function logout(){

localStorage.removeItem("user");
navigate("/signin");

}

return(

<header className="header">

<h2>Knowledge Hub</h2>

<button onClick={logout}>Logout</button>

</header>

)

}

export default Header;