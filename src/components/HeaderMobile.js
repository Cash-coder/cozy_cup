import React, {useState} from "react";

export default function HeaderMobile() {

  const [isMenuToggled, setIsMenuToggled] = useState(false)
  function handleMenuToggle() {
    setIsMenuToggled(!isMenuToggled)
  }

  function checkMenuCheckbox(){
    const checkbox = document.querySelector(
      '#menuToggle input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  return (
      <nav
        role="navigation"
        onBlur={() => {
          handleMenuToggle(); // hide menu
          checkMenuCheckbox(); // transform menu burger icon to deactivated state
        }}>
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
            <a href="https://erikterwan.com/"
               target="_blank"><li>Show me more</li></a>
          </ul>
        </div>
      </nav>
    )
}

