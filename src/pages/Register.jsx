import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        const user = {
            name,
            email,
            password
        };
        localStorage.setItem( "user",JSON.stringify(user));
        alert("Registration successful");
        navigate("/");
};
return (
   < div style={{textAlign:"center"}}>
<h1>Register</h1>
<form onSubmit={handleRegister}>
<input type="text" placeholder="Name"value={name}onChange={(e)=>setName(e.target.value)}/>
<br/>
<input type="email"placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
<br/>
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
<br/>
<button type="submit">Register</button>
</form>
<p>Already have account?<Link to="/"> Login</Link></p>
</div>      
)
}
export default Register;