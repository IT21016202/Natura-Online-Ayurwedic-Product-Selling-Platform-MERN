import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {

  const liStyle = {
    padding: "10px",
    color : "green",
  }

  return (
    <div>
      <ul style={{marginTop: "20%", listStyleType: "none"}}>
        <Link to='/allProducts'><li cla style={liStyle}>All Products</li></Link> 
        <li style={liStyle}>Creams</li>
        <li style={liStyle}>Soaps</li>
        <li style={liStyle}>Shampoo</li>
        <li style={liStyle}>Oils</li>
        <li style={liStyle}>Weight Gainers</li>
        <li style={liStyle}>Vitamins</li>
      </ul>
    </div>
  );
}
