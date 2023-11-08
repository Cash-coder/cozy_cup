import './App.css';
import { Home, Recipes, CoffeeBeans } from "./index";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/coffee-beans' element={<CoffeeBeans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

