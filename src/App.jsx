import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ViewProduct from "./pages/ViewProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "view-product",
      element: (
        <div>
          <Navbar />
          <ViewProduct />
          <Footer />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
