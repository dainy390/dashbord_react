import { useState, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/api/users/login", form);
    login(res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-4">

      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 
        </h2>

        <p className="text-center text-sm text-gray-200 mb-6">
          Login to continue to your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <input
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <input
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-300"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <a
            href="/"
            className="text-yellow-300 hover:underline"
          >
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}
