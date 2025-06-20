import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
   const navigaete = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://movierbuzz-backend.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
    navigaete("/login")
  };

  return (
    <div className="titlebarsignin">
      <h1>Movie BuZZZ</h1>
      <div className="signuppage">
 <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Signup</button>
    </form>
      </div>
    </div>
   
  );
}

export default Signup;
