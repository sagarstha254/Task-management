import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", { email, password });
      navigate("/login");
    } catch (error) {
      console.log("Signup Failed", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Signup
        </button>
        <h3 className="text-xl mb-4">
          Already have an account?
          <span onClick={() => navigate("/login")}>Login</span>
        </h3>
      </form>
    </div>
  );
};

export default Signup;
