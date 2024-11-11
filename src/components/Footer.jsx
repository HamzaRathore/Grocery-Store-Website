import React from "react";
import { FaInstagram, FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-12 bg-orange-400 rounded-t-xl">
      <div className="flex flex-col md:flex-row md:justify-around border-b-2 border-orange-700 pb-4 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-black">ShopSphere</h1>
          <p className="pt-4 ml-8 md:pt-10 px-4 md:px-0 ">
            Welcome to our online grocery store, where convenience meets
            freshness! Explore a wide range of high-quality groceries, delivered
            straight to your door for a hassle-free shopping experience.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-black">Quick Links</h1>
          <nav className="pt-4 space-y-2">
            <p className="hover:underline hover:cursor-pointer">Home</p>
            <p className="hover:underline hover:cursor-pointer">About</p>
            <p className="hover:underline hover:cursor-pointer">Contact</p>
            
            <p className="hover:underline hover:cursor-pointer">
              Privacy Policy
            </p>
          </nav>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-black">Get In Touch</h1>
          <div className="pt-4 space-y-2">
            <p className="hover:underline hover:cursor-pointer">
              +92 3044428475
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Lahore, Pakistan
            </p>
            <p className="hover:underline hover:cursor-pointer">
              hamzarathore0000@gmail.com
            </p>
            <div className="flex justify-center md:justify-start space-x-3 pt-2">
              <a href="#">
                <FaFacebook size={30} />
              </a>
              <a href="#">
                <FaInstagram size={30} />
              </a>
              <a href="#">
                <FaTwitter size={30} />
              </a>
              <a href="#">
                <FaGoogle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom flex justify-center pt-4 pb-2 text-center text-sm md:text-base">
        <p>&copy; 2024 ShopSphere. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
