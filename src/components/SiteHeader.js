import React from 'react';
import './ui/siteHeader.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteHeader() {

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
            <span className="dropdown dropdown-toggle-icon">
                <FontAwesomeIcon icon={faChevronDown}/>
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
    </div>
  )
}