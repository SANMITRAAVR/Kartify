import { useState } from "react";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import AuthModal from "./components/AuthModal";

import Home from "./pages/Home";

function App() {

  const [searchTerm, setSearchTerm] =
    useState("");

  return (
    <div>

      {/* Toast */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CartSidebar />

      <CheckoutModal />

      <AuthModal />

      <Home searchTerm={searchTerm} />

    </div>
  );
}

export default App;