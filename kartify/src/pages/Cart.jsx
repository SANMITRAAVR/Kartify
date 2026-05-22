import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems } = useContext(CartContext);

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-8 py-10">

      <h1 className="text-5xl font-bold mb-10">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (

        <p className="text-gray-400 text-xl">
          Your cart is empty.
        </p>

      ) : (

        <div className="space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-[#1E293B] p-5 rounded-2xl flex items-center justify-between"
            >

              {/* Product Info */}
              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div>

                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Quantity: {item.quantity}
                  </p>

                </div>

              </div>

              {/* Price */}
              <h2 className="text-2xl font-bold text-indigo-400">
                ₹{item.price * item.quantity}
              </h2>

            </div>

          ))}

          {/* Total */}
          <div className="flex justify-between items-center border-t border-gray-700 pt-6 mt-10">

            <h2 className="text-3xl font-bold">
              Total:
            </h2>

            <h2 className="text-4xl font-bold text-indigo-400">
              ₹{totalPrice}
            </h2>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;