import './App.css';

import Home from './pages/Home';
import Recipes from "./pages/Recipes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

