import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg";
import FoodList from "../components/FoodList/FoodList";

import foodImage from "../assets/food.jpg";
function Drinks() {
  const drinks   = {
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
    plove: {
      image: foodImage,
      path: "/",
      title: "Plove",
      price: 20,
    },
    Shorpo: {
      image: foodImage,
      path: "/",
      title: "Shorpo",
      price: 25,
    },
    Samsa: {
      image: foodImage,
      path: "/",
      title: "Samsa",
      price: 5,
    },
  };




  return (
    <>
      <Header title="Welcome to Kyrgyz National Drinks!" image={headerImage}>
        Kyrgyzstan is a country where a nomadic and sedentary culture united at
        the crossroads of the Great Silk Road.
      </Header>
    </>
  );
}

export default Drinks;
