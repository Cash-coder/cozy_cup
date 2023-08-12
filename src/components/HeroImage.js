import './ui/heroImage.css';

function HeroImage(){
  return (
    <div className="hero-block two-columns-container">
      <div className="grid-item-0">
        <div className="hero-image">
          <div className="image-content"></div>
        </div>
      </div>
      <div className="grid-item-1">
        <h1>Brew Amazing Coffee</h1>
        <p className="hero-p">
          Learn to <strong> brew </strong> world-class coffee at home without confusing yourself.
          <br/>
          Click subscribe for free emails that will sharpen your coffee skills
        </p>
          <div className='buttons-container'>
            <button className="hero-btn">Subscribe Free</button>
            <button className="hero-btn insta">See Us On Instagram</button>
          </div>
        </div>
      </div>


  )
};

export default HeroImage;