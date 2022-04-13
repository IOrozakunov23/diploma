import { Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Home from "./pages/Home";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Foods" element={<Foods />} />
      </Routes>
    
      <Footer />
      <Drinks />
      <Foods />

      <Home />
    </div>
  );
}

export default App;
