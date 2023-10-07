import Header from '../components/Header';
import PostBanner from "../components/PostBanner";
import '../styles/recipes.css';

export default function Recipes(){
  return (
    <>
      <Header />
      <PostBanner
        img={{
          src: "https://www.homegrounds.co/wp-content/uploads/2023/08/Recipes-homepgae-banner.webp",
          alt: 'coffee recipes image'
        }}
        text={{
          title: 'Coffee Recipes',
          paragraph: 'Tired of the same old black coffee? Looking to liven up your coffee experience? We’ve put together some of the best coffee recipes on the internet here for you, from traditional espresso drinks to coffee ice cream. New recipes are added weekly!'
        }}
      />
    </>
  )
}