import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodList.module.css";

function FoodList({ foods }) {
  const foodItems = Object.keys(foods).map(id => (
    <FoodItem key={id} food={foods[id]} />
  ));

  return (
    <div className={classes.FoodList}>
      {foodItems}
    </div>
  );
}

export default FoodList;