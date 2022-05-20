import DrinksItem from "./DrinksItem/DrinksItem";
import classes from "./DrinksList.module.css";

function DrinksList({ products }) {
  const productItems = products.map(product => (
    <DrinksItem key={product.productId} product={product} />
  ));

  return (
    <div className={classes.DrinksList}>
      {productItems}
    </div>
  );
}

export default DrinksList;