import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://movierbuzz-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.token) {
      login(data.token);
      alert("login in successfull")
      navigate("/searchmovie");
      
    } else {
      alert(data.message);
    }
  };

  return (
<div className="titlebar">
  <h1>Movie BuZZZ</h1>
  <div className="loginpage">


      <form onSubmit={handleSubmit} className="login-form">
  <input
  type="email"
    placeholder="Email"
    onChange={(e) => setForm({ ...form, email: e.target.value })}
  />
  <input
    type="password"
    placeholder="Password"
    onChange={(e) => setForm({ ...form, password: e.target.value })}
  />
  <button type="submit">Login</button>
</form>
</div>
   </div>
    
  );
}

export default Login;
