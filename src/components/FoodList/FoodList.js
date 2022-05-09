import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodList.module.css";

function FoodList({ products }) {
  const productItems = products.map(product => (
    <FoodItem key={product.productId} product={product} />
  ));

  return (
    <div className={classes.ProductList}>
      {productItems}
    </div>
  );
}

export default FoodList;