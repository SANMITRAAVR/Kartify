import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-[#1E293B] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      {/* Product Details */}
      <div className="p-5">

        <h2 className="text-2xl font-semibold text-white">
          {product.name}
        </h2>

        <p className="text-gray-400 mt-2">
          {product.category}
        </p>

        <div className="flex items-center justify-between mt-5">

          <h3 className="text-indigo-400 text-2xl font-bold">
            ₹{product.price}
          </h3>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-500 px-4 py-2 rounded-xl hover:bg-indigo-600 transition"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;