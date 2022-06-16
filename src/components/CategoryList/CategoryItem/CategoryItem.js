import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <img src={category.image} alt={category.title} />
      <Link to={"/categories/" + category.categoryId}>{category.title}</Link>
    </div>
  );
}

export default CategoryItem;