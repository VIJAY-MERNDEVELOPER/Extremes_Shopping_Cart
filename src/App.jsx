import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import ForgetPassword from "./pages/ForgetPassword";
// import {} from "react-router";

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState();

  return (
    <>
      <div
        className="App container-fixed "
        style={{ width: "100%", overflow: "hidden" }}
      >
        <NavBar cart={cart} setCart={setCart} setProducts={setProducts} />

        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} products={products} />}
          />
          <Route path="/product:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

// http://localhost:8000/products
// http://localhost:8000/categories
// http://localhost:8000/banners
// http://localhost:8000/insta_videos
// http://localhost:8000/cart
// http://localhost:8000/users
// npx json-server .\fileName.json
// json-server --watch fileName.json -port 8000
// npx json-server --watch .\CLIENT\src\api\data.json --port 8000
