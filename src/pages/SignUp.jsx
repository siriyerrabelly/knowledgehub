import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

function handleRegister(e){

e.preventDefault();

if(name && email && password){

localStorage.setItem("user", email);

alert("Account created successfully");

navigate("/");

}else{

alert("Please fill all fields");

}

}

return(

<div className="signin-container">

<form className="signin-box" onSubmit={handleRegister}>

<h2>Sign Up</h2>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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

<button type="submit">Register</button>

<p className="signin-link">
Already have an account? <Link to="/signin">Sign In</Link>
</p>

</form>

</div>

)

}

export default SignUp;