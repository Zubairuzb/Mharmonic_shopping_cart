import { React, useState } from "react";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Sample from "./components/Sample.jsx";
import About from "./pages/About.jsx";
import Privacy from "./pages/Privacy.jsx";
import Error from "./pages/Error.jsx";
import Courses from "./pages/Courses.jsx";
import Cart from "./pages/Cart.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct.jsx";

let App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar cart={cart} />
                <Home />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <NavBar cart={cart} />
                <About />
              </>
            }
          />
          <Route path="sample" element={<Sample />} />
          <Route
            path="privacy"
            element={
              <>
                <NavBar cart={cart} />
                <Privacy />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <NavBar cart={cart} />
                <Courses />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <NavBar cart={cart} />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/courses/:id"
            element={
              <>
                <NavBar cart={cart} />{" "}
                <SingleProduct cart={cart} setCart={setCart} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
