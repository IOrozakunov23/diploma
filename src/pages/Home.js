import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg"; 
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header title="Pizza" image={headerImage}>
      In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.
      </Header>
      <CategoryList categories={getCategories()} />
    </>
  );
}
export default Home;