import './App.css';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import BestCoffeeBrands from "./components/BestCoffeeBrands";
import LearnIconsGrid from "./components/LearnIconsGrid";
import SectionImageWithText from "./components/SectionImageWithText";
import {whoWeAreData} from "./data/const";
// --- To Make later ---
// Redux, url paths, context or similar

// --- continue ---
// who are we
// popular posts
// most read guides
// page subscribe
// page coffee flavour wheel. table of contents, accordeon faqs

// --- technical debt ---
// heroImage h1 and p getting cut below 1700px - width 97%
// completar menús navegación


// --- possibles ---
// slide animation for mobile menu
// what do you want to learn/brew/roast animation
// icons home, rotate on hoover

// --- resources ---
// https://www.homegrounds.co/



export default function App() {
  return (
    <div className="App">

      <Header />
      <HeroImage />
      <BestCoffeeBrands />
      <LearnIconsGrid />
      <SectionImageWithText
        title={whoWeAreData.title}
        text={whoWeAreData.text}
        imageUrl={whoWeAreData.imageUrl}
        sectionClassname={'image-with-text'}
        sectionId={'whoAreWe'}
      />

    </div>
  );
}

