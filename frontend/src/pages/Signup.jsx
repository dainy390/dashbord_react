import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await api.post("/api/users/signup", form);
    alert("Signup successful ");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Full Name"
            onChange={e=>setForm({...form,name:e.target.value})}
          />

          <input
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Email"
            onChange={e=>setForm({...form,email:e.target.value})}
          />

          <input
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Password"
            type="password"
            onChange={e=>setForm({...form,password:e.target.value})}
          />

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
