import {useEffect} from 'react'
import back_1 from '../assets/back-1.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className='py-28 h-screen w-full  overflow-hidden'>
        <div className='relative h-screen w-full'>
            <img src={back_1} className='object-cover inset-0 h-full w-full' alt="" />
            <div className='absolute inset-0 bg-opacity-50 flex flex-col opacity-100'>
                <div className=' relative mx-auto px-4 h-full top-40 '>
                    <p className="text-xl font-bold mb-8 animate-tracking-in-expand-fwd duration-200" >🛒 "Healthy, Fresh, and Affordable - Every Day!"</p>
                 <h1 className=' font-signature text-7xl font-bold mb-6 animate-tracking-in-expand-fwd duration-200  ' >Fresh Groceries Delivered to Your Doorstep</h1>
                 <p className="text-xl font-bold mb-8 animate-tracking-in-expand-fwd duration-200">Shop from our wide selection of fresh, high-quality products at the best prices.</p>
                  <button data-aos="fade-ight"
                data-aos-delay="800" className='border-2 border-black p-2 rounded-xl font-bold hover:bg-gradient-to-b from-red-800 via-white to-blue-900 hover:border-1'>Shop Now</button>
            </div>
            
            </div>
        </div>
        

        
      
    </div>
    
  )
  
}

export default Home
