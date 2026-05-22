import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="px-8 py-16 text-white">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left */}
        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight">
            Discover the Best
            <span className="text-indigo-400"> Products </span>
            Online
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Shop premium electronics, fashion, accessories,
            and more with amazing deals.
          </p>

          <button className="mt-8 bg-indigo-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-indigo-600 transition">
            Shop Now
          </button>

        </div>

        {/* Right */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="shopping"
            className="w-[450px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>

      {/* Products Section */}
      <div className="mt-24">

        <h2 className="text-4xl font-bold mb-10">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;