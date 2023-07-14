import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lay from './components/Lay';
import Main from './components/Main';
import Menu from './components/Menu';
import About from './components/About';
import Page from './components/Page';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lay />}>
        <Route index element={<Main />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
