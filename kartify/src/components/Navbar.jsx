import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#111827] shadow-lg">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-indigo-400">
        Kartify
      </h1>

      {/* Search */}
      <div className="hidden md:flex items-center bg-[#1F2937] px-4 py-2 rounded-xl w-[35%]">

        <FaSearch className="text-gray-400 mr-3" />

        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none text-white w-full"
        />

      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-xl text-white">

        {/* Cart */}
        <div className="relative">

          <FaShoppingCart />

          <span className="absolute -top-3 -right-3 bg-indigo-500 text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>

        </div>

        {/* User */}
        <FaUser />

      </div>

    </nav>
  );
}

export default Navbar;