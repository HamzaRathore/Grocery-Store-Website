import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fruits from './components/Fruits'
import Products from './components/Products'
import Features from './components/Features'
import Banner from './components/Banner'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import BlogSection from './components/BlogSection'
import ViewProduct from './pages/ViewProduct'

function App() {
  
          const router= createBrowserRouter(
            [
              {
                path:'/',
                element:<div>
                  <Navbar/>
                  <Home/>
                  <Fruits/>
                  <Products />
                  <Features />
                  <Banner />
                  <BlogSection />
                  <NewsLetter />
                  <Footer />
                </div>
              },
              {
                path:'view-product',
                element:<div>
                  <Navbar/>
                  <ViewProduct/>
                  <Footer/>

                </div>
              }
            ]
          )
  return (

    <RouterProvider router={router}/>
  )
}

export default App;
