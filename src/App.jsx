import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
// import {} from "react-router";

function App() {
  return (
    <>
      <div
        className="App container-fixed "
        style={{ width: "100%", overflow: "hidden" }}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products:id" element={<Products />} />
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
