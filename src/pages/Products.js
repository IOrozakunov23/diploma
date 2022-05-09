import Header from "../components/Header/Header";
  import headerImage from "../assets/food.jpg";
  import FoodList from "../components/FoodList/FoodList";
  import { getProducts } from "../data/products";
  
  function Products() {
    return (
      <>
        <Header
          title="Kyrgyz dishes"
          image={headerImage}>
          Kyrgyzstan is a country where a nomadic and sedentary culture united at the crossroads of the Great Silk Road.
        </Header>
  
        <FoodList products={getProducts()} />
      </>
    );
  }
  
  export default Products;

