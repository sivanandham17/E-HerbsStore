import React from "react";
import {BsFillCartCheckFill} from 'react-icons/bs'
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size}) => {
  return (
    <nav className="gnav">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <Link to="/product">
            Product 
          </Link>
        </span>
        {/* <span className="my_shop" onClick={() => setShow(true)}>
          <Link to="/tiles">
            Tiles
          </Link>
        </span> */}
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <BsFillCartCheckFill/>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
