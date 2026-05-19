import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
function Login()  {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (  storedUser &&email === storedUser.email && password === storedUser.password) {
        alert("Login successful");
        navigate("/dashboard");
    } else {
        alert("Invalid email or password");
    }
};
return (
<div >
<h1>Login</h1>
<form onSubmit={handleLogin}>
<input type="email" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)}required/>
<input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)} required/>
<button type="submit">Login</button>
</form>
<p>Don't have an account?<Link to="/register">Register</Link></p>
</div>
);
}
export default Login;