import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pp_1 from "../assets/products/pp-1.png";

const ViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handleBackToProducts = () => {
    navigate('/');
  };

  // Default view for when no product is found
  if (!product) {
    return (
      <div className='w-full min-h-screen pt-20 px-4 md:px-8'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row w-full justify-center items-center gap-8 py-8'>
            {/* Default product image */}
            <div className='w-full md:w-1/2 max-w-md'>
              <div className='aspect-square relative'>
                <img 
                  src={pp_1} 
                  alt="default product" 
                  className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-200' 
                />
              </div>
            </div>
            
            {/* Default content */}
            <div className='w-full md:w-1/2 max-w-md flex flex-col gap-6 text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-600'>ShopSphere</h1>
              <h2 className='text-xl md:text-3xl lg:text-5xl font-bold'>Product Not Found</h2>
              <p className='text-base md:text-lg'>Please try again later</p>
              <button 
                onClick={handleBackToProducts}
                className="mt-4 border-2 border-black w-full max-w-xs mx-auto md:mx-0 h-12 rounded-full bg-black hover:scale-105 hover:bg-gradient-to-r from-black to-orange-600 text-white transition-all duration-200"
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main product view
  return (
    <div className='w-full min-h-screen pt-40 px-4 md:px-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row w-full justify-center items-center gap-8 py-8'>
          {/* Product image */}
          <div className='w-full md:w-1/2 max-w-md'>
            <div className='aspect-square relative'>
              <img 
                src={product.src || pp_1} 
                alt={product.desc || 'product'} 
                className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-200' 
              />
            </div>
          </div>

          {/* Product details */}
          <div className='w-full md:w-1/2 max-w-md flex flex-col gap-6 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-600'>ShopSphere</h1>
            <h2 className='text-xl md:text-3xl lg:text-5xl font-bold break-words'>
              {product.desc || 'No description available'}
            </h2>
            <p className='text-lg flex items-center justify-center md:justify-start gap-2'>
              <span className='text-orange-600'>★★★</span>
              <span>{product.price || 'N/A'}</span>
              <span className='text-orange-600'>★★★</span>
            </p>
            
            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <button className="w-full sm:w-1/2 h-12 rounded-full bg-black border-2 border-black text-white hover:scale-105 hover:bg-gradient-to-r from-black to-orange-600 transition-all duration-200">
                Add to Cart
              </button>
              <button 
                onClick={handleBackToProducts}
                className="w-full sm:w-1/2 h-12 rounded-full bg-white border-2 border-black hover:scale-105 hover:bg-gradient-to-r from-orange-600 to-black hover:text-white transition-all duration-200"
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;