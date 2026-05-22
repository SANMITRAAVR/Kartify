import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { CartContext } from "../context/CartContext";

function CheckoutModal() {

  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
  } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Place Order
  const handleOrder = () => {

    if (
      !formData.name ||
      !formData.address ||
      !formData.phone
    ) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Order placed successfully!");

    clearCart();

    setIsCheckoutOpen(false);

    setFormData({
      name: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition
      ${isCheckoutOpen ? "block" : "hidden"}`}
    >

      <div className="bg-[#111827] w-[90%] max-w-md p-8 rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold text-white">
            Checkout
          </h2>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>

        </div>

        {/* Inputs */}
        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
          />

          {/* Button */}
          <button
            onClick={handleOrder}
            className="w-full bg-indigo-500 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default CheckoutModal;