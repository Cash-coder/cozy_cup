import '../styles/Header.css'
import useMobileDetect from '../hooks/useMobileDetect';
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {

  const isMobile = useMobileDetect();

  return (
    <div className='site-header'>
      <div className="site-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/585/220/large_2x/coffee-cup-logo-template-vector-icon-design.jpg"
          alt="site logo by vecteezy"
        />
      </div>

      {isMobile ? <HeaderMobile /> : <HeaderDesktop/>}

    </div>
  )
}