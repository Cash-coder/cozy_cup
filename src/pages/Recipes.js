import {Header, PostBanner, ArticleThumbrowSection} from '../index';
import {recipesCoffeeMilkData, recipesBlackData, recipesDessertData} from "../data/const";

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
      <ArticleThumbrowSection
        title="Milk-based Coffee"
        paragraph="If you prefer your coffee with a creamy touch, this is the section for you. These recipes combine the boldness of coffee with the smoothness of milk, creating a perfect balance. You can make all our milk-based coffee recipes with dairy or non-dairy alternatives, including almond, soy, oat, and coconut milk. Check out the recipes below to learn the difference between the different coffees with milk and how to make your versions at home. We have them all: Cortado, cappuccino, flat white, latte, macchiato."
        gridData={recipesCoffeeMilkData}
      />
      <ArticleThumbrowSection
        title="Black Coffee Recepies"
        paragraph="To start off our list of coffee drinks we’ll start with the classics. This is where you’ll find all the black coffee recipes. These recipes require nothing more than coffee, water and a little expertise. If you’re a fan of the robust, rich flavor of black coffee, check out the recipes below to learn how they differ from each other, and how to brew them at home."
        gridData={recipesBlackData}
      />
      <ArticleThumbrowSection
        title='Coffee Desert Recipes'
        paragraph='What’s better than coffee? A coffee dessert to go with your coffee! Here, you’ll find a selection of coffee-themed treats for every occasion.
                  Try a coffee cake, coffee brownie, or coffee profiterole for the perfect breakfast pairing. Feeling fancy? How about coffee macarons, a mocha meringue pie, or an authentic Italian tiramisu? On a hot day, enjoy an affogato, cold brew popsicle, or coffee semifreddo. We’ve got tried-and-tested recipes for them all!'
        gridData={recipesDessertData}
        />
    </>
  )
}