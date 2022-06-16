import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";
import FoodList from "../components/FoodList/FoodList";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <Header
        title={category.title}
        image={category.image}>
        {category.desciption}
      </Header>

      <FoodList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;