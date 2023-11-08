import menu from "../data/recepies";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


export default function HeaderDesktop() {
  return (
    <nav className='main-nav'>
      <ul className='main-ul'>
        <li className="dropdown">
          <a className='dropdown'>Tools
            <span className="dropdown dropdown-toggle-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </a>
          <div className="dropdown-content"> {
            menu.tools.submenuItems.map((subMenu) =>(
              <a
                key={subMenu.id}
                href={subMenu.url}>
                {subMenu.title}
              </a>
            ))}
          </div>
        </li>
        <li><a href="/coffee-beans">Coffee Beans</a></li>
        <li><a href="#">Gear</a></li>
        <li><Link to={'/Recipes'}>Recipes</Link></li>
      </ul>
    </nav>
  );
}