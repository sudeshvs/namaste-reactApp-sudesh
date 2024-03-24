import React, { useState, useEffect, useContext } from "react";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../src/context/cart";
import { getProducts } from "./api/getProducts";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import LazyLoad from "react-lazy-load";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [cartVisible, setCartVisible] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data.slice(0, visibleProducts));
    };
    fetchData();
  }, [visibleProducts]);

  //search function
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered.slice(0, visibleProducts));
  };
  //using this below function to achieve the lazyLoading
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (
      windowHeight + scrollTop >= documentHeight - 20 &&
      documentHeight > windowHeight
    ) {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5); // Load next 5 products
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProducts]);

  const toggle = () => {
    setshowModal(!showModal);
  };

  //this is a function used to render the searched items

  const renderProducts = () => {
    if (filteredProducts.length === 0) {
      return <p>No products found</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {filteredProducts.map((product) => (
          <LazyLoad key={product.id} height={200} once>
            <ProductCard product={product} />
          </LazyLoad>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="nav-wrapper">
        <nav className="flex-row items-center justify-between flex-wrap p-6 bg-slate-900 rounded shadow sticky top-0 z-5">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              My Store
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div>
              {!showModal && (
                <button
                  onClick={toggle}
                  class="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-black border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 mr-4"
                >
                  ({cartItems.length})
                  <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
                </button>
              )}
            </div>
            <div>
              <button class="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-black border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">
                <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div>{renderProducts()}</div>
      <Cart showModal={showModal} toggle={toggle} />
      {cartItems.length > 0 && (
        <button
          onClick={toggle}
          className="fixed bottom-0 left-0 w-full bg-slate-900 text-white py-4"
        >
          Go to Cart
        </button>
      )}
    </div>
  );
}

export default App;
