import './ui/heroImage.css';

function HeroImage(){
  return (
    <div className="hero-block two-columns-container">
      <div>
      <h1>Brew Amazing Coffee</h1>
      <p className="Hero-p">
        Learn to <strong> brew </strong> world-class coffee at home without confusing yourself.
        <br/>
        Click subscribe for free emails that will sharpen your coffee skills
      </p>
      <div>
        <button className="hero-btn">Subscribe Free</button>
        <button className="hero-btn insta">See Us On Instagram</button>
      </div>

      <div className="hero-image">
        <img src=" https://www.homegrounds.co/wp-content/uploads/2019/10/banner1-1.png" alt="Coffee hero image"/>
      </div>
      </div>
    </div>
  )
};

export default HeroImage;