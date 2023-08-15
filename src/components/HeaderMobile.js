import React, {useState} from "react";

export default function HeaderMobile() {

  const [isMenuToggled, setIsMenuToggled] = useState(false)
  function handleMenuToggle() {
    setIsMenuToggled(!isMenuToggled)
  }

  return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" onClick={handleMenuToggle}/>
          <span></span>
          <span></span>
          <span></span>
          <ul className={isMenuToggled ? "menu-visible" : 'menu-hidden'}>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
          </ul>
        </div>
      </nav>
    )
}

