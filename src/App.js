/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import AddProduct from "./admin/AddProduct";



function App() {
  return (
    <div className="App">
      <Navbar />
      <AddProduct/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
