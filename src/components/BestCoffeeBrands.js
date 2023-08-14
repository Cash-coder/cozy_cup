import React from "react";
import './ui/coffeeBrandLogo.css';

export default function BestCoffeeBrands() {

  // coffee brand logo images
  const coffeeBrandsLogos = [
    'https://www.bonescoffee.com/cdn/shop/files/classiclogo-outlined_300x300.png?v=1613789764',
    'https://images-workbench.99static.com/yy7qzFZ2W6CsvW2ubO15A2TzwUs=/99designs-contests-attachments/102/102676/attachment_102676624',
    'https://images-workbench.99static.com/Xrvw9EKWKounIDXyLAPASt4gtvs=/99designs-contests-attachments/143/143753/attachment_143753906',
    'https://cdn.dribbble.com/users/1077075/screenshots/6243762/skybean_4x.png',
  ]

  function getAlt(logoUrl) {
    const parsedURL = new URL(logoUrl)
    return parsedURL.hostname
  }

  return(
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
  )
}