import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductModal({
  product,
  isModalOpen,
  setIsModalOpen,
}) {

  const { addToCart } = useContext(CartContext);

  return (
    <div
      className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4
      ${isModalOpen ? "block" : "hidden"}`}
    >

      <div className="bg-[#111827] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl">

        <div className="grid md:grid-cols-2">

          {/* Left Image */}
          <div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />

          </div>

          {/* Right Content */}
          <div className="p-8 flex flex-col justify-center">

            {/* Close */}
            <div className="flex justify-end">

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-3xl hover:text-red-400 transition"
              >
                ✕
              </button>

            </div>

            {/* Product Info */}
            <h2 className="text-4xl font-bold text-white mt-4">
              {product.name}
            </h2>

            <p className="text-indigo-400 text-xl mt-3">
              {product.category}
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Experience premium quality and modern design
              with this amazing product from Kartify.
              Built for style, comfort, and everyday use.
            </p>

            <h3 className="text-4xl font-bold text-indigo-400 mt-8">
              ₹{product.price}
            </h3>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={() => addToCart(product)}
                className="bg-indigo-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition"
              >
                Add To Cart
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="border border-gray-600 px-8 py-4 rounded-2xl text-white hover:bg-gray-700 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;