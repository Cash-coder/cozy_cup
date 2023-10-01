import './App.css';
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import BestCoffeeBrands from "./components/BestCoffeeBrands";
import LearnIconsGrid from "./components/LearnIconsGrid";
import SectionImageWithText from "./components/SectionImageWithText";
import {whoWeAreData, tableArticleThumbrowData} from "./data/const";
import TableArticleThumbrow from "./components/TableArticleThumbrow";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
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
        <TableArticleThumbrow
          data={tableArticleThumbrowData}
        />
      </main>
      <Footer/>
    </div>
  );
}

