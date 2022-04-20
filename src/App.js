import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav.js";

import Home from "./pages/Home";
import Foods from "./pages/Foods";
import Drinks from "./pages/Drinks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Foods />} />
          <Route path="/Drinks" element={<Drinks />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
