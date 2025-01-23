import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import Football from "./components/DordoiFootball/Football";
import SalymbekovUniversity from "./components/SalymbekovUniversity/SalymbekovUniversity";
import CosmosPark from "./components/CosmoPark/CosmosPark";
import DordoyPlaza from "./components/DordoyPlaza";
import Undefined from "./components/Undefined/UndefinedPage.Jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/football" element={<Football />} />
        <Route path="/university" element={<SalymbekovUniversity />} />
        <Route path="/cosmos-park" element={<CosmosPark />} />
        <Route path="/dordoy-plaza" element={<DordoyPlaza />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
