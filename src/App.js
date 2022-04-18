import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav.js";

import Home from "./components/pages/Home";
import Foods from "./components/pages/Foods";
import Drinks from "./components/pages/Drinks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Foods />} />
          <Route path="/Drinks" element={<Drinks />} />
        </Routes>
      </Layout>

      <Drinks />
      <Footer />
    </div>
  );
}

export default App;
