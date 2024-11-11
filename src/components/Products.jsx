import { useEffect } from "react";
import prod_1 from "../assets/products/prod-1.png";
import prod_2 from "../assets/products/prod-2.png";
import prod_3 from "../assets/products/prod-3.png";
import prod_4 from "../assets/products/prod-4.png";
import prod_5 from "../assets/products/prod-5.png";
import pp_1 from "../assets/products/pp-1.png";
import pp_2 from "../assets/products/pp-2.png";
import pp_3 from "../assets/products/pp_3.png";
import pp_4 from "../assets/products/pp-4.png";
import pp_5 from "../assets/products/pp-5.png";
import pp_6 from "../assets/products/pp-6.png";
import pp_7 from "../assets/products/pp-7.png";
import pp_8 from "../assets/products/pp-8.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";


const Products = () => {

  const navigate=useNavigate();

  const handleProductClick=(product)=>{

    
    navigate("/view-product", { state: { product } })
  }


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const prod = [
    {
      id: 1,
      src: prod_1,
      head: "Bakery & Bread",
      quan: "120",
    },
    {
      id: 2,
      src: prod_5,
      head: "SeaFood",
      quan: "60",
    },
    {
      id: 3,
      src: prod_3,
      head: "Fresh Vegetables",
      quan: "90",
    },
    {
      id: 4,
      src: prod_2,
      head: "Fruits",
      quan: "150",
    },
    {
      id: 5,
      src: prod_4,
      head: "Beverages",
      quan: "150",
    },
  ];

  const pop_prod = [
    {
      id: 1,
      src: pp_1,
      price: "Rs:1500",
      desc: "Stylish Mens T-Shirt",
    },
    {
      id: 2,
      src: pp_2,
      price: "Rs:1800",
      desc: "Salmon half kg",
    },
    {
      id: 3,
      src: pp_3,
      price: "Rs:3500",
      desc: "Men's Regular Fit Denim Jeans",
    },
    {
      id: 4,
      src: pp_4,
      price: "Rs:1000",
      desc: "Men's Leather Wallet",
    },
    {
      id: 5,
      src: pp_5,
      price: "Rs:6000",
      desc: "Men's Black Strap Watch",
    },
    {
      id: 6,
      src: pp_6,
      price: "Rs:250",
      desc: "Yummy Cocunut Donuts",
    },
    {
      id: 7,
      src: pp_7,
      price: "Rs:2000",
      desc: "Men's Black/Gray Stylish Cap",
    },
    {
      id: 8,
      src: pp_8,
      price: "Rs:1000",
      desc: "Sugar Free Bread",
    },
  ];
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row mt-20 md:mt-0">
      {/* categories */}
      <div
        className="flex flex-col pt-10 w-full md:w-96 bg-white rounded"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1 className="font-bold text-2xl md:text-3xl border-b-2 pb-4 md:pb-8 mx-4 md:mx-8">
          Categories
        </h1>
        <div className="flex flex-col w-full px-4 md:px-8">
          {prod.map(({ id, src, head, quan }) => (
            <div
              key={id}
              className="flex items-center py-4 md:py-6 space-x-3 md:space-x-5 w-full border-b border-gray-200 last:border-b-0"
            >
              <Link to='/view-product' ><img
                src={src}
                alt={head}
                className="h-12 w-12 md:h-16 md:w-16 object-cover"
              />
              </Link>
              <div className="flex flex-col">
                <h1 className="font-bold text-base md:text-lg hover:cursor-pointer hover:underline">
                  {head}
                </h1>
                <p className="text-sm md:text-base text-gray-600 hover:cursor-pointer hover:underline">
                  {quan} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* products */}
      <div
        className="flex flex-col pt-10  w-full mx-2"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <div className="flex border-b-2 pb-1 justify-between  w-full  px-8">
          <h1 className="font-bold text-2xl md:text-3xl pb-4 md:pb-8 mx-4 md:mx-8">
            Popular Products
          </h1>
          <p className="underline hover:text-red-800 hover:cursor-pointer">
            View All
          </p>
        </div>

        {/* display products */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
          {pop_prod.map((product) => (
            <div key={product.id} 
            onClick={()=>handleProductClick(product)}
            className=" h-96 w-full flex flex-col items-center">
              <div className="w-full  flex justify-center items-center h-48 ">
                <img
                  src={product.src}
                  alt="products"
                  className="h-56 w-52 hover:scale-105 duration-200 object-cover overflow-hidden"
                />
              </div>
              {/* Wrapper for price and description */}
              <div className="w-full px-4 mt-8">
                <h1 className="font-bold">{product.price}</h1>
                <p>{product.desc}</p>
              </div>
              <button className="mt-4 border-2 border-black md:w-full w-60 h-12 rounded-full bg-black hover:scale-105 hover:bg-gradient-to-r from-black to-orange-600 text-white duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
