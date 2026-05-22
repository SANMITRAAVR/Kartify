import {
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Navbar({
  searchTerm,
  setSearchTerm,
}) {

  const {
    cartItems,
    setIsCartOpen,

    user,
    logout,

    setIsAuthOpen,
  } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#111827] shadow-lg sticky top-0 z-40">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-indigo-400 cursor-pointer">
        Kartify
      </h1>

      {/* Search */}
      <div className="hidden md:flex items-center bg-[#1F2937] px-4 py-2 rounded-xl w-[35%] border border-gray-700">

        <FaSearch className="text-gray-400 mr-3" />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-transparent outline-none text-white w-full placeholder-gray-400"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-white">

        {/* Cart */}
        <div
          onClick={() => setIsCartOpen(true)}
          className="relative cursor-pointer hover:text-indigo-400 transition duration-300"
        >

          <FaShoppingCart className="text-2xl" />

          <span className="absolute -top-3 -right-3 bg-indigo-500 text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>

        </div>

        {/* User Section */}
        {user ? (

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">

              <FaUser className="text-xl" />

              <span className="text-sm text-gray-300">
                {user.name}
              </span>

            </div>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-xl text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        ) : (

          <button
            onClick={() => setIsAuthOpen(true)}
            className="bg-indigo-500 px-5 py-2 rounded-xl text-sm hover:bg-indigo-600 transition"
          >
            Login
          </button>

        )}

      </div>

    </nav>
  );
}

export default Navbar;