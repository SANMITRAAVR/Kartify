import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { CartContext } from "../context/CartContext";

function AuthModal() {

  const {
    isAuthOpen,
    setIsAuthOpen,
    login,
  } = useContext(CartContext);

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = () => {

    if (
      !formData.email ||
      !formData.password ||
      (!isLogin && !formData.name)
    ) {
      toast.error("Please fill all fields");
      return;
    }

    // Fake Auth
    const userData = {
      name: formData.name || "User",
      email: formData.email,
    };

    login(userData);

    setIsAuthOpen(false);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50
      ${isAuthOpen ? "block" : "hidden"}`}
    >

      <div className="bg-[#111827] w-[90%] max-w-md p-8 rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-white">
            {isLogin ? "Login" : "Register"}
          </h2>

          <button
            onClick={() => setIsAuthOpen(false)}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>

        </div>

        {/* Inputs */}
        <div className="space-y-5">

          {!isLogin && (

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
            />

          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-500 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>

          {/* Toggle */}
          <p className="text-gray-400 text-center">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 ml-2"
            >
              {isLogin ? "Register" : "Login"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default AuthModal;