import { Link } from "react-router-dom";
import classes from "./DrinksItem.module.css";

function DrinksItem({ product  }) {
  return (
    <div className={classes.DrinksItem}>
      <img src={product.image} alt={product.title} />
      <Link to={"/products/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>${product.price}</div>
    </div>
  );
}

export default DrinksItem;