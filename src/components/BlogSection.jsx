import {useEffect} from "react";
import blog1 from "../assets/products/blog-1.jpeg";
import blog2 from "../assets/products/blog-2.avif";
import blog3 from "../assets/products/blog-3.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const blogs = [
    {
      imgSrc: blog1,
      title: "Tasty and refreshing Fruits",
      date: "by admin / 21st May, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
    },
    {
      imgSrc: blog2,
      title: "Tasty and refreshing Vegetables",
      date: "by admin / 1st July, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
    },
    {
      imgSrc: blog3,
      title: "Tasty and refreshing Bakery Items",
      date: "by admin / 8th Oct, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
    },
  ];

  return (
    <section id="blogs" className="py-12 px-6 " data-aos="fade-right"
    data-aos-delay="800">
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        Our <span className="text-yellow-500">Blogs</span>
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <a
                href="#"
                className="text-2xl font-semibold text-white hover:text-yellow-500 transition-colors duration-300"
              >
                {blog.title}
              </a>
              <span className="block text-yellow-500 text-xl mt-2">
                {blog.date}
              </span>
              <p className="text-gray-400 mt-4">{blog.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-yellow-500 font-semibold hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
