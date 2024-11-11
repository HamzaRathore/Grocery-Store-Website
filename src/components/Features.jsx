import {useEffect} from 'react'
// import { Link } from 'react-router-dom';
import f1 from "../assets/category/f1.png";
import f2 from "../assets/category/f2.png";
import f3 from "../assets/category/f3.png";
import f4 from "../assets/category/f4.png";
import { FiTruck, FiPackage, FiCreditCard, FiPhoneCall } from 'react-icons/fi';
import AOS from "aos";
import "aos/dist/aos.css";


const Features = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
         
        });
      }, []);


    const features = [
        { icon: <FiTruck className="w-8 h-8" />, title: 'Free Delivery', desc: 'On orders over $100' },
        { icon: <FiPackage className="w-8 h-8" />, title: 'Fresh Products', desc: 'Quality guaranteed' },
        { icon: <FiCreditCard className="w-8 h-8" />, title: 'Secure Payment', desc: 'Safe transactions' },
        { icon: <FiPhoneCall className="w-8 h-8" />, title: '24/7 Support', desc: 'Call us anytime' },
      ];
    
      const categories = [
        { id:1, name: 'Fresh Fruits', src:f1 },
        { id:2, name: 'Vegetables', src:f2 },
        { id:3, name: 'Dairy Products', src:f3 },
        { id:4, name: 'Bakery Items', src:f4 },
      ];
  
  return (
    <div className='pb-20 w-full'>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-bold pt-12 ' data-aos="fade-up"
                data-aos-delay="200">Features</h1>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14" data-aos="fade-up"
                data-aos-delay="200">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-green-500 mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 pt-12" data-aos="fade-up"
                data-aos-delay="200">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up"
                data-aos-delay="200">
          {categories.map(({id,src,name}) => (
            <div 
              key={id}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              <img 
                src={src} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      </div>

    
    
  )
}

export default Features
