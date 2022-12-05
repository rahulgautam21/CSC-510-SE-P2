import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Aboutus() {
  return (
    <Base>
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          In today's customer centric economy, products tweaked to the customer
          needs and desires have the highest market value. The recent boom in
          social media advertisement, has led to huge increase in demand for
          customized merchandise from small/local businesses. And most of the
          times these local businesses cannot get registered to world wide
          e-commerce sites due to local supply of the product.
        </p>
        <p>
          We design a custom e-commerce site that can be run by any local
          business owner free of cost to sell the merchandise at a large scale.
          One can add any kind of product on the site be it tshirts, customized
          planners, wallpapers (How about some fresh organic produce!). All you
          need to do is setup the project and use it to increase your product
          reach!
        </p>
      </div>

      <div className="about-team">
        <h1>Team</h1>
        <ul className="about-ul">
          <li className="about-li"> Shubham </li>
          <li className="about-li"> Rahul </li>
          <li className="about-li"> Shreya </li>
          <li className="about-li"> Chetana </li>
          <li className="about-li"> Sarika </li>
          <li className="about-li"> Sri Lekha </li>
        </ul>
      </div>
    </Base>
  )
}
