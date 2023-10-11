import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// for easy component imports
export { default as Header } from './components/Header';
export { default as PostBanner } from './components/PostBanner';
export { default as BestCoffeeBrands } from './components/BestCoffeeBrands';
export { default as Footer } from './components/Footer';
export { default as Grid } from './components/Grid';
export { default as HeroImage } from './components/HeroImage';
export { default as LearnIconsGrid } from './components/LearnIconsGrid';
export { default as SectionImageWithText } from './components/SectionImageWithText';
export { default as TableArticleThumbrow } from './components/TableArticleThumbrow';
export { default as ArticleThumbrowSection } from './components/ArticleThumbrowSection';
export { default as ArticleTable } from './components/ArticleTable';
//pages import
export { default as CoffeeBeans } from './pages/CoffeeBeans';
export { default as Home } from './pages/Home';
export { default as Recipes } from './pages/Recipes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
