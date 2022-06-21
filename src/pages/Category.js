import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/categories";

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
    </>
  );
}

export default Category;