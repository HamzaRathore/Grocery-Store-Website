import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiMenu,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dark:bg-gray-800">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:block w-full bg-indigo-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm text-center">
              Free shipping on orders over $100 🚚
            </p>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Menu Icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <FiMenu className="h-6 w-6" />
              </button>
              <Link
                to="/"
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-indigo-600" : "text-black"
                }`}
              >
                ShopSphere
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 items-center max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FiSearch className="absolute right-4 top-3 text-gray-400" />
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
              <button className="hover:text-indigo-500 transition-colors">
                <MdDarkMode className="h-6 w-6" />
              </button>
              <Link to="/account" className="hover:text-indigo-500 transition-colors">
                <FiUser className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="relative group hover:text-indigo-500 transition-colors">
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs group-hover:bg-indigo-700">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white px-4 py-3 space-y-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Home
            </Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Products
            </Link>
            <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Cart
            </Link>
            <Link
              to="/account"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              My Account
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
