import { useEffect } from "react";
import fruit_1 from "../assets/fruits/fruits1.webp";
import fruit_2 from "../assets/fruits/fruits2.png";
import fruit_3 from "../assets/fruits/fruits3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Fruits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const fruit = [
    {
      id: 1,
      src: fruit_1,
      heading: "Fresh Fruits",
      desc: "Enjoy the freshest, hand-picked fruits packed with flavor and nutrients, delivered right to your door!",
    },
    {
      id: 2,
      src: fruit_2,
      heading: "Fresh Juice",
      desc: "Refresh yourself with our pure, natural juices made from the freshest fruits, bursting with flavor and goodness!",
    },
    {
      id: 3,
      src: fruit_3,
      heading: "Orange Juice",
      desc: "Savor the taste of freshly squeezed oranges in every sip pure, zesty, and packed with Vitamin C!",
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 md:px-8 py-8 md:py-12">
      {/* Header Section */}
      <div
        className="flex flex-col w-full text-center mb-8 md:mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          <span>Fresh And </span>
          <span className="text-orange-500">Tasty Fruits</span>
        </h1>
        <p className="pt-4 md:pt-8 text-sm md:text-lg px-4 md:px-8 lg:px-32 max-w-4xl mx-auto">
          "Nature's sweetness delivered fresh to your door, bringing health and
          happiness in every bite. Where quality meets freshness: Premium fruits
          carefully chosen for your wellness journey"
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {fruit.map(({ id, src, heading, desc }) => (
          <div
            key={id}
            className="flex flex-col items-center p-4 md:p-6 
                                 bg-white rounded-lg shadow-lg hover:shadow-xl 
                                 transition-shadow duration-300"
          >
            <img
              src={src}
              alt={heading}
              className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 
                                     drop-shadow-2xl object-contain 
                                     transition-transform duration-300 hover:scale-105"
            />
            <h2
              className="font-bold text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6
                                     bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 
                                     text-transparent bg-clip-text text-center"
            >
              {heading}
            </h2>
            <p
              className="text-sm md:text-base text-center mt-3 md:mt-4
                                    text-gray-600"
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
