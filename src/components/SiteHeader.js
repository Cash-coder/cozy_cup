import './ui/siteHeader.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useMobileDetect from './hooks/useMobileDetect';

export default function SiteHeader() {

  const isMobile = useMobileDetect();

  // Dummy Data
  const subMenus = {
    tools: {
      id: 0,
      title: 'Tools',
      submenuItems: [
        {
          id: 0,
          title: 'Coffee Grinder',
          url: '#',
        },
        {
          id: 1,
          title: 'Coffee Compass',
          url: '#',
        },
      ],
    },

    recipes: {
      id: 1,
      title: 'Recipes',
      submenuItems: [
        // Add your recipe submenu items here
      ],
    },
  };


  const desktopHeader = (
    <nav className='main-nav'>
      <ul className='main-ul'>
        <li className="dropdown">
          <a className='dropdown'>Tools</a>
          <span className="dropdown dropdown-toggle-icon">
                <FontAwesomeIcon icon={faChevronDown} />
            </span>
          <div className="dropdown-content">
            {subMenus.tools.submenuItems.map((subMenu) =>(
              <a
                key={subMenu.id}
                href={subMenu.url}>
                {subMenu.title}
              </a>
            ))}
          </div>
        </li>
        <li><a href="#">Coffee Beans</a></li>
        <li><a href="#">Gear</a></li>
        <li><a href="#">Recipes</a></li>
      </ul>
    </nav>
  )

  const mobileHeader = (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  )


  return (
    <div className='site-header'>
      <div className="site-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/585/220/large_2x/coffee-cup-logo-template-vector-icon-design.jpg"
          alt="site logo by vecteezy"
        />
      </div>

      {isMobile ? mobileHeader : desktopHeader}

    </div>
  )
}