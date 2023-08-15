import './App.css';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import BestCoffeeBrands from "./components/BestCoffeeBrands";
import LearnIconsGrid from "./components/LearnIconsGrid";

// --- To Make later ---
// Redux, url paths, context or similar


// --- technical debt ---
// fix responsive issue in hero image, buttons and p getting cut in mobile
    //padding in bot dir rather tahn margin

// Adjust header widht: my content is full widht, theirs not
    //max-width
    //margin 0 auto = center

// slide animation for mobile menu

//button
    // container margin 0 auto, maxwidht 80
    // gap


// responisve by css, not react
// float not recommended



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

