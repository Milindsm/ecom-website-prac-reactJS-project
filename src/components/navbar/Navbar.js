/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Add Product</NavLink>
      <NavLink to="/read">Added Products</NavLink>
      <NavLink to="/update">Update</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default Navbar;


