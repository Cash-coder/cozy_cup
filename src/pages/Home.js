import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import BestCoffeeBrands from "../components/BestCoffeeBrands";
import LearnIconsGrid from "../components/LearnIconsGrid";
import SectionImageWithText from "../components/SectionImageWithText";
import {HomeTableArticleThumbrowData, whoWeAreData} from "../data/const";
import TableArticleThumbrow from "../components/TableArticleThumbrow";
import Footer from "../components/Footer";


export default function Home(){
  return (
    <>
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
          id="home-article-thumbrow"
          data={HomeTableArticleThumbrowData}
        />
      </main>
      <Footer/>
    </>
  )
}
