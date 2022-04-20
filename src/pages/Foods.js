import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg";
import FoodList from "../components/FoodList/FoodList";

import foodImage from "../assets/food.jpg";

function Foods() {
  const foods = {
    hazelnut: {
      image: foodImage,
      path: "/",
      title: "Beshbarmak",
      price: 12,
    },
    darkRoast: {
      image: foodImage,
      path: "/",
      title: "Kuurdak",
      price: 14,
    },
    houseBlend: {
      image: foodImage,
      path: "/",
      title: "Boorsok",
      price: 18,
    },
    lightRoast: {
      image: foodImage,
      path: "/",
      title: "Byzhy",
      price: 20,
    }
  };

  return (
    <>
      <Header
        title="Kyrgyz dishes"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <FoodList foods={foods} />
    </>
  );
}

export default Foods;