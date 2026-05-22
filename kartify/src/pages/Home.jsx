import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ searchTerm }) {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Categories
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
  ];

  // Filter Products
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-8 py-10 text-white">

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center min-h-[70vh]">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover the Best
            <span className="text-indigo-400"> Products </span>
            Online
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Shop premium electronics, fashion, accessories,
            and more with amazing deals and modern shopping experience.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 700,
                behavior: "smooth",
              })
            }
            className="mt-8 bg-indigo-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Shop Now
          </button>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="shopping"
            className="w-full max-w-[500px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>

      {/* Products Section */}
      <div className="mt-16">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <h2 className="text-4xl font-bold">
            Trending Products
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-5 py-2 rounded-xl transition duration-300
                  
                  ${
                    selectedCategory === category
                      ? "bg-indigo-500 text-white"
                      : "bg-[#1E293B] text-gray-300 hover:bg-indigo-500 hover:text-white"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* No Products */}
        {filteredProducts.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-3xl text-gray-400">
              No products found
            </h2>

          </div>

        ) : (

          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Home;