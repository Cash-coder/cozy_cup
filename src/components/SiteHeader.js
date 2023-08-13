import React from 'react';
import './ui/siteHeader.css';


export default function SiteHeader() {

  return (
    <div className='site-header'>
      <div className="site-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/585/220/large_2x/coffee-cup-logo-template-vector-icon-design.jpg"
          alt="site logo by vecteezy"/>
      </div>
      <nav className='main-nav'>
        <ul className='main-ul'>
          <li className="dropdown">
            <a className='dropdown'>Tools</a>
            <div className="dropdown-content">
                 <a href="#">Coffee Grinder</a>
                 <a href="#">Coffee Compass</a>
            </div>
          </li>
          <li><a href="#">Coffee Beans</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Recipes</a></li>
        </ul>
      </nav>
    </div>
  )
}