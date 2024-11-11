import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiSearch, FiUser, FiHeart} from 'react-icons/fi';
import { BiCategoryAlt } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiSun, FiMoon } from 'react-icons/fi';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='dark:bg-gray-800'>
      <nav
        className={`fixed w-full z-50 transition-all duration-300  ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:block w-full bg-indigo-600 text-white py-2">
          <div className="w-full mx-auto px-4">
            <p className="text-sm text-center">Free shipping on orders over $100 🚚</p>
          </div>
        </div>

        {/* Main navbar */}
        <div className="w-full mx-auto px-4 shadow-lg">
          <div className="flex justify-between items-center h-20">
            {/* Menu icon and Logo */}
            <div className="flex items-center space-x-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FiMenu className="h-6 w-6" />
              </button>

              <Link
                to="/"
                className={`text-2xl font-bold  transition-colors duration-300 ${
                  isScrolled ? 'text-indigo-600' : 'text-black'
                }`}
              >
                ShopSphere
              </Link>
            </div>
             
             {/* categories */}

             <div className="relative ">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-44 h-10 flex items-center justify-center rounded-xl hover:bg-slate-200"
              >
                <BiCategoryAlt className="h-6 w-6" />
                <p className="text-xl mx-2">Categories</p>
                <IoIosArrowDown className="h-6 w-6" />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-[40rem] h-96 bg-white shadow-lg rounded-lg flex flex-col flex-wrap">
                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2  ">Vegetables</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Leafy green</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Lentils</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Root Vegetables</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Tomatoes</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Seasonal Vegetables</p>
            

                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2  ">Fruits</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Berries</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Tropical Fruits</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Citrus Fruits</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Stone Fruits</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Exotic Fruits</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Melons</p>


                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2 ">Bakery & Bread</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline curosir:pointer ">Bread</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline curosir:pointer ">Eggs</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Buns & Rolls</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Cake</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Pastery</p>

                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2  ">Baverages</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Soft Drinks</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Juices</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Energy Drinks</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Coffee</p>


                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2  ">Meat/SeaFood</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Fresh Meat</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Processed Meat</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Sea food</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Prepared Meat</p>

                  <p className="block px-4 py-2 hover:bg-gray-100 font-bold border-b-2  ">Garments</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Shirts</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">T-shirts</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Pants</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Jackets</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Hoddie</p>
                  <p className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:cursor-pointer ">Socks</p>
                  
                 
                </div>
              )}
            </div>

            {/* Search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FiSearch className="absolute right-4 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-8 mr-10">
              <button
               
              className="hover:text-indigo-500 transition-colors">
                <MdDarkMode className="h-6 w-6" />
              </button>
              {/* <button className="hover:text-indigo-500 transition-colors">
                <FiHeart className="h-6 w-6" />
              </button> */}
              <button className="hover:text-indigo-500 transition-colors">
                <FiUser className="h-6 w-6" />
              </button>
              <Link to="/cart" className="relative group">
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs group-hover:bg-indigo-700 transition-colors">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          
          <div className="bg-white px-4 py-3 space-y-3 w-1/2 md:w-72 rounded-lg"> 
            {/* check */}
            <div className="hidden md:relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiSearch className="absolute right-4 top-3 text-gray-400" />
            </div>
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cart
            </Link>
            <hr className="my-2" />
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
