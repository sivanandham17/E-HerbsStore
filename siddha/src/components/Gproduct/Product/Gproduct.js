import React from "react";
import {product} from "../../../data";
import Cards from "../Product/Card";
import "./gproduct.css";

const Amazon = ({ handleClick }) => {
  return (
    <>
      <section className="sectiong">
        {product.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
      
    </>
  );
};

export default Amazon;
