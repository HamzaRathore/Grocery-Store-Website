import { useEffect } from "react";
import app_store from "../assets/banner/app_store.png";
import banner from "../assets/banner/banner.jpg";
import play_store from "../assets/banner/play_store.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="w-full pb-8 pt-16 px-4 sm:px-6 lg:px-8"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div className="relative h-[70vh] sm:h-[80vh] w-full max-w-7xl mx-auto rounded-3xl overflow-hidden">
        {/* Banner Image */}
        <img
          src={banner}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />

        {/* Content Container */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center md:items-start p-6 md:p-12">
          {/* Text Content */}
          <div className="w-full md:w-[50%] space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Download The App
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 font-semibold">
              Experience the convenience of shopping on the go! Download our
              app today for exclusive deals and fast, easy access to all your
              favorite products.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="hover:opacity-90 transition-opacity">
                <img
                  src={play_store}
                  alt="Play Store"
                  className="h-12 sm:h-16 lg:h-20 w-auto"
                />
              </button>
              <button className="hover:opacity-90 transition-opacity">
                <img
                  src={app_store}
                  alt="App Store"
                  className="h-12 sm:h-16 lg:h-20 w-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
