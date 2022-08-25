import React from "react";
import "../styles/navbar.css"
import img from "../assets/gmes.png"

function Navbar() {
  return (
    <nav>
    <div className="nav_box">
        <span className="my_shop"><img src={img} alt="Games Store"/></span>
      <div className="cart">
        <span>☀</span>
      </div>
    </div>
    </nav>
  )
}

export default Navbar