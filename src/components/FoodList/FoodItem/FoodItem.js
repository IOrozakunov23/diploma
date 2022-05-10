import { Link } from "react-router-dom";
import classes from "./FoodItem.module.css";

function FoodItem({ product  }) {
  return (
    <div className={classes.FoodItem}>
      <img src={product.image} alt={product.title} />
      <Link to={"/foods/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>${product.price}</div>
    </div>
  );
}

export default FoodItem;