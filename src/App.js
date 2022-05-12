import Home from "./pages/Home";
import Products from "./pages/Products";
import Drinks from "./pages/Drinks";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
