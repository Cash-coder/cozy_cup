import './ui/heroImage.css';
import React, {useState, useEffect} from "react";
import useMobileDetect from "./hooks/useMobileDetect";

function HeroImage(){

  // const [isMobile, setIsMobile] = useState(false);
  //
  // useEffect( () => {
  //   function handleResize(){
  //     setIsMobile(window.innerWidth <= 768)
  //   }
  //   handleResize()
  //   window.addEventListener('resize', handleResize)
  //
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   };
  // }, []);

  const isMobile = useMobileDetect();

  return (
    <div className="hero-block two-columns-container">
      <div className="grid-item-0">
        <div className="hero-image">
          <div className="image-content">
            {isMobile ? '' :
              <img src="https://www.homegrounds.co/wp-content/uploads/2019/10/banner1-1.png"
                   alt="coffe brew" className="hero-image-content" />}
          </div>
        </div>
      </div>
      <div className="grid-item-1">
        <h1>Brew Amazing Coffee</h1>
        <p className="hero-p">
          Learn to <strong>brew</strong> world-class coffee at home without confusing yourself.
          <br/>
          {isMobile ? <br/> : ''}
          Click subscribe for free emails that will sharpen your coffee skills
        </p>
          <div className='buttons-container'>
            <button className="hero-btn">Subscribe Free</button>
            <button className="hero-btn insta">See Us On Instagram</button>
          </div>
        </div>
      </div>


  )
}

export default HeroImage;