import './App.css';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import BestCoffeeBrands from "./components/BestCoffeeBrands";
import LearnIconsGrid from "./components/LearnIconsGrid";

// --- To Make later ---
// Redux, url paths, context or similar

// --- continue ---
// who are we
// popular posts
// most read guides
// page subscribe
// page coffee flavour wheel. accordeon faqs

// --- technical debt ---
// heroImage h1 and p getting cut below 1700px - width 97%
// completar menús navegación

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

