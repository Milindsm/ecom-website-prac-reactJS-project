/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import AddProduct from "./admin/AddProduct";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/read" element={< Read/>} />
        <Route path="/update" element={<Update />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
