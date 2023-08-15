import React from "react";
import '../styles/coffeeBrandLogo.css';
import coffeeBrandsLogos from '../data/coffeeBrandLogosData';
export default function BestCoffeeBrands() {



  function getAlt(logoUrl) {
    const parsedURL = new URL(logoUrl)
    return parsedURL.hostname
  }

  return(

    <div className="featured-brands-container">
      <h2>Best Featured Coffee Brands</h2>
      <div className="logos-container">
        <ul className="logo-list">
          {coffeeBrandsLogos.map((logo, index) => (
            <li key={index}>
              <img
                className="coffee-brand-logo"
                src={logo}
                alt={getAlt(logo)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}