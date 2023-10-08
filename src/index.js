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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
