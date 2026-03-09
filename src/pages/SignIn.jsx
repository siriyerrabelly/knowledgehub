import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

function SignIn(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

function handleLogin(e){

e.preventDefault();

if(email && password){

localStorage.setItem("user", email);

// redirect to homepage
navigate("/");

}else{

alert("Please enter email and password");

}

}

return(

<div className="signin-container">

<form className="signin-box" onSubmit={handleLogin}>

<h2>Sign In</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

<p className="signin-link">
Don't have an account? <Link to="/signup">Sign Up</Link>
</p>

</form>

</div>

)

}

export default SignIn;