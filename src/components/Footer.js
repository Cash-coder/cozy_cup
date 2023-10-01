import '../styles/footer.css';
import {footerMenuItems} from '../data/const';

export default function Footer () {

  return (
    <footer>
      <ul id="menu-footer">
        {footerMenuItems.map((item, index) =>
          <li key={index}>
            <a
              href={item.link}>
              {item.title}
            </a>
          </li>)}
      </ul>
    </footer>
  )
}