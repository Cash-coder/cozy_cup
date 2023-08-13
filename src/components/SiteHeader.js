import React from 'react';
import './ui/siteHeader.css';


export default function SiteHeader() {


  return (
    <div className='site-header'>
      <div className="site-logo aaa">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/585/220/large_2x/coffee-cup-logo-template-vector-icon-design.jpg"
          alt="site logo by vecteezy"/>
      </div>
      <nav className='main-nav'>
        <ul className='main-ul'>
          <li className="dropdown">
            <a href="#">Tools</a>
              <ul className="dropdown-content">
                <li> <a href="#">Coffee Grinder</a> </li>
                <li> <a href="#"> Coffee Compass</a> </li>
              </ul>
          </li>
          <li><a href="#">Coffee Beans</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Recipes</a></li>
        </ul>
      </nav>
    </div>
  )
}