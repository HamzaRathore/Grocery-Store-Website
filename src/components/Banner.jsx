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
      className="w-full pb-4 pt-16 px-4 sm:px-6 lg:px-8"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div className="relative h-[80vh] w-full max-w-7xl mx-auto  rounded-3xl overflow-hidden">
        <div className="h-full w-full relative">
          {/* Banner Image */}
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover rounded-3xl"
          />

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12">
            {/* Text Content - On mobile, centered at bottom. On desktop, aligned right */}
            <div className="w-full md:w-[45%] md:ml-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center md:text-left">
                Download The App
              </h1>

              <p className="text-lg md:text-xl font-bold text-black text-center md:text-left">
                Experience the convenience of shopping on the go! Download our
                app today for exclusive deals and fast, easy access to all your
                favorite products.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="hover:opacity-90 transition-opacity">
                  <img
                    src={play_store}
                    alt="Play Store"
                    className="h-16 md:h-24 w-auto"
                  />
                </button>
                <button className="hover:opacity-90 transition-opacity">
                  <img
                    src={app_store}
                    alt="App Store"
                    className="h-16 md:h-24 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
