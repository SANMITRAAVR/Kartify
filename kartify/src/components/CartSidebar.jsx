import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSidebar() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
  } = useContext(CartContext);

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[350px] bg-[#111827] shadow-2xl p-6 z-50 transform transition-transform duration-300 overflow-y-auto
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold text-white">
          Your Cart
        </h2>

        <button
          onClick={() => setIsCartOpen(false)}
          className="text-white text-2xl hover:text-red-400 transition"
        >
          ✕
        </button>

      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (

        <p className="text-gray-400 text-lg">
          Cart is empty.
        </p>

      ) : (

        <div className="space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-[#1E293B] p-4 rounded-2xl"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              {/* Product Info */}
              <h3 className="text-white text-xl font-semibold mt-4">
                {item.name}
              </h3>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 mt-4">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-[#0F172A] px-3 py-1 rounded-lg text-white hover:bg-red-500 transition"
                >
                  -
                </button>

                <span className="text-white text-lg font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-[#0F172A] px-3 py-1 rounded-lg text-white hover:bg-indigo-500 transition"
                >
                  +
                </button>

              </div>

              {/* Price + Remove */}
              <div className="flex items-center justify-between mt-5">

                <h3 className="text-indigo-400 text-xl font-bold">
                  ₹{item.price * item.quantity}
                </h3>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 px-3 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          {/* Total */}
          <div className="border-t border-gray-700 pt-5 mt-6">

            <h2 className="text-2xl font-bold text-white">
              Total:
            </h2>

            <h2 className="text-3xl font-bold text-indigo-400 mt-2">
              ₹{totalPrice}
            </h2>

            {/* Checkout Button */}
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full mt-6 bg-indigo-500 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition"
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default CartSidebar;