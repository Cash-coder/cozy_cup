import '../styles/footer.css';
import {footerMenuItems} from '../data/const';

export default function Footer () {

  const FooterItems = () => (
    <div className="footer-nav">
      <div className="container-widgets">
        <ul id="footer-widgets">
          {footerMenuItems.map((item,
                                index) =>
            <li key={index}>
              <a
                href={item.link}>
                {item.title}
              </a>
            </li>)}
        </ul>
      </div>
    </div>
  )

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <FooterItems />
        <div className="footer-hero">
          <div className="footer-contact">
            <h4>Ready to elevate your coffee quality ?</h4>
            <div className="footer-buttons">
              <a className="footer-btn" href="#">SIGN UP FOR FREE</a>
              <a className="footer-btn" id="footer-btn-2" href="#">COFFEE GUIDES</a>
            </div>
          </div>
          <img src={require('../images/coffee-cup.png')} alt="Coffe cup"/>
        </div>
      </div>
    </footer>
  )
}