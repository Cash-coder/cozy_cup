import './App.css';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import BestCoffeeBrands from "./components/BestCoffeeBrands";
import LearnIconsGrid from "./components/LearnIconsGrid";

// --- To Make later ---
// Redux, url paths, context or similar


// --- technical debt ---

// --- possibles ---
// slide animation for mobile menu

// --- resources ---
// https://www.homegrounds.co/

export default function App() {
  return (
    <div className="App">

      <Header />
      <HeroImage />
      <BestCoffeeBrands />
      <LearnIconsGrid />

    </div>
  );
}

