import './App.css';
import HeroImage from "./components/HeroImage";
import SiteHeader from "./components/SiteHeader";
import BestCoffeeBrands from "./components/BestCoffeeBrands";


// General: code standards, best practices, weird things I did and how to do it better
// Why I can't change the font weight ? siteHeader.css 40 font-weight: 400;
// less hardcoded and more react
// nav menu: how to change color on hoover of both the icon AND the text, not one or the other
// fix responsive issue in hero image, buttons and p getting cut
// Adjust header widht: my content is full widht, theirs not

// continue
// burger menu


export default function App() {
  return (
    <div className="App">

      <SiteHeader />
      <HeroImage />
      <BestCoffeeBrands />

    </div>
  );
}

