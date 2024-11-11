import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const NewsLetter = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
         
        });
      }, []);

  return (
    <div >
       <div className="max-w-7xl mx-auto px-4 text-center bg-orange-350 pt-10 pb-10">
        <h2 className="text-3xl font-bold text-black mb-4" data-aos="fade-left"
    data-aos-delay="200">Subscribe to Our Newsletter</h2>
        <p className="text-black mb-8" data-aos="fade-right"
    data-aos-delay="200">Get updates about new products and special offers!</p>
        <div className="max-w-md mx-auto flex gap-4" data-aos="fade-up"
    data-aos-delay="100">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg"
          />
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
