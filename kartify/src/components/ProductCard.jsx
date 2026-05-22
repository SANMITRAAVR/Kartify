import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import ProductModal from "./ProductModal";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (
    <>
      {/* Product Card */}
      <div className="bg-[#1E293B] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />

        {/* Details */}
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

          {/* View Details */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-5 border border-indigo-500 text-indigo-400 py-3 rounded-2xl hover:bg-indigo-500 hover:text-white transition"
          >
            View Details
          </button>

        </div>

      </div>

      {/* Product Modal */}
      <ProductModal
        product={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default ProductCard;