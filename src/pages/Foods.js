import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg";
import FoodList from "../components/FoodList/FoodList";

import foodImage from "../assets/food.jpg";

function Foods() {
  const foods = {
    beshbarmak: {
      image: foodImage,
      path: "/",
      title: "Beshbarmak",
      price: 12,
    },
    kuurdak: {
      image: foodImage,
      path: "/",
      title: "Kuurdak",
      price: 14,
    },
    boorsok: {
      image: foodImage,
      path: "/",
      title: "Boorsok",
      price: 18,
    },
    plov: {
      image: foodImage,
      path: "/",
      title: "Plov",
      price: 20,
    }
  };

  return (
    <>
      <Header
        title="Kyrgyz dishes"
        image={headerImage}>
       Kyrgyzstan is a country where a nomadic and sedentary culture united at the crossroads of the Great Silk Road.
      </Header>

      <FoodList foods={foods} />
    </>
  );
}

export default Foods;