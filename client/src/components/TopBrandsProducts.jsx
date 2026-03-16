import React from "react";
import { Link } from "react-router-dom";
import { useWishList } from "../context/WishListContext";
import { mockProducts } from "../data/mockProducts";

const TopBrandsProducts = () => {
  const { toggleItemWishList, list } = useWishList();

  const sortedProducts = [...mockProducts].sort((a, b) => b.reviews - a.reviews);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Link to={`/product-details/${product._id}`}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                BEST SELLER
              </span>

              <button
                onClick={() => toggleItemWishList(product._id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                {list.includes(product._id) ? "❤️" : "🤍"}
              </button>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            <div className="p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                {product.brand}
              </p>

              <Link to={`/product-details/${product._id}`}>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
              </Link>

              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && "½"}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {product.orders} orders this month
              </p>

              <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 active:scale-95 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrandsProducts;