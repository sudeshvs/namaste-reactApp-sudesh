import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart";
import Cart from "./Cart";

const ProductCard = ({ product }) => {
  const { id, name, price, image, rating: intialRating } = product;
  const [rating, setRating] = useState(intialRating);
  const [isFavorite, setIsFavorite] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext);

// here below using localstorage to store the favourites so thet its available even after the browser is closed,
// I have used the localstorage because of the requirement

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((favId) => favId !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  //you can click on the rating star to change the rating of an item and its not stored anywhere

  const handleStarClick = (index) => {
    setRating(index + 1 === rating ? index : index + 1);
  };

  return (
    <div className="bg-white bg-opacity-0 p-4 rounded-lg shadow-md mb-3 mt-3 hover:scale-105">
      <img src={image} alt={name} className="w-full h-32 object-contain mb-4" />
      <h2 className="text-lg font-semibold text-white">{name}</h2>
      <p className="text-white">${price}</p>
      <div className="flex items-center mt-2">
        <button
          className="bg-slate-900 text-white px-3 py-1 rounded-md mr-2 hover:text-gray-400 hover:bg-white"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="text-gray-400 hover:text-white w-24"
          onClick={handleToggleFavorite}
          // aria-label={isFavorite ? "Remove Fav" : "Add Fav"}
        >
          {isFavorite ? "Remove Fav" : "Add Fav"}
        </button>
        <div className="flex items-center ml-auto">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-500" : "text-gray-400"
              } fill-current cursor-pointer`}
              viewBox="0 0 20 20"
              onClick={() => handleStarClick(index)}
            >
              <path d="M10 0l2.44 5.78L18 7.18l-4.38 4.02L15.33 20 10 16.38 4.67 20l1.71-8 .02-.18L2 7.18l5.56-1.4z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
