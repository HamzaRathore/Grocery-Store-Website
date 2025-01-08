import { useEffect } from "react";
import back_1 from "../assets/back-1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Fruits from "../components/Fruits";
import Products from "../components/Products";
import Features from "../components/Features";
import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={back_1}
          className="absolute inset-0 h-full w-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center px-6 sm:px-10">
          {/* Tagline */}
          <p className="text-base sm:text-lg lg:text-xl font-bold text-black mb-4 animate-tracking-in-expand-fwd">
            🛒 "Healthy, Fresh, and Affordable - Every Day!"
          </p>

          {/* Title */}
          <h1 className="font-signature text-3xl sm:text-5xl lg:text-7xl font-bold text-black text-center mb-6 animate-tracking-in-expand-fwd">
            Fresh Groceries Delivered to Your Doorstep
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl font-bold text-black text-center mb-8 animate-tracking-in-expand-fwd">
            Shop from our wide selection of fresh, high-quality products at the
            best prices.
          </p>

          {/* Button */}
          <button
            data-aos="fade-in"
            data-aos-delay="800"
            className="border-2 border-black p-2 rounded-xl font-bold hover:bg-gradient-to-b from-red-800 via-white to-blue-900 hover:border-1"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Fruits />
        <Products />
        <Features />
        <Banner />
        <BlogSection />
        <NewsLetter />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
