import { Link } from "react-router-dom";
import classes from "./FoodItem.module.css";

function FoodItem({ food }) {
  return (
    <div className={classes.FoodItem}>
      <img src={food.image} />
      <Link to={food.path}>{food.title}</Link>
      <div className={classes.price}>${food.price}</div>
    </div>
  );
}

export default FoodItem;