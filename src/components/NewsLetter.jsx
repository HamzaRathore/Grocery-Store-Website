import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Subscribe to Our Newsletter
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base lg:text-lg text-black mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Get updates about new products and special offers!
        </p>

        {/* Form */}
        <div
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg text-sm sm:text-base"
          />
          <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
