import colsImage from "../assets/cols.jpg";
import spriteImage from "../assets/sprite.jpg";
import fantaImage from "../assets/fanta.jpg";
const categories = [
  // {
  //   image: colsImage,
  //   productId: "cola",
  //   title: "Cola",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.`,
  //   price: 2,
  // },
  // {
  //   image: spriteImage,
  //   productId: "sprite",
  //   title: "Sprite",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.`,
  //   price: 2,
  // },
  // {
  //   image: fantaImage,
  //   productId: "fanta",
  //   title: "Fanta",
  //   description: `Osteria Francescana is a restaurant owned and run by chef Massimo Bottura in Modena, Italy. In 2018, William Reed Business Media named Osteria Francescana the best restaurant in the world that year in their annual The World's 50 Best Restaurants. In 2016 and 2018, it was rated as the world's best restaurant in the World's 50 Best Restaurants. It was the first Italian restaurant to earn the award. It was also second best in 2015 and third best in 2013 and 2014.`,
  //   price: 2,
  // },
  // {
  //   image: fantaImage,
  //   productId: "fanta",
  //   title: "Moxito",
  //   description: `Osteria Francescana is a restaurant owned and run by chef Massimo Bottura in Modena, Italy. In 2018, William Reed Business Media named Osteria Francescana the best restaurant in the world that year in their annual The World's 50 Best Restaurants. In 2016 and 2018, it was rated as the world's best restaurant in the World's 50 Best Restaurants. It was the first Italian restaurant to earn the award. It was also second best in 2015 and third best in 2013 and 2014.`,
  //   price: 5,
  // },
  // {
  //   image: fantaImage,
  //   productId: "fanta",
  //   title: "Сocktail",
  //   description: `Osteria Francescana is a restaurant owned and run by chef Massimo Bottura in Modena, Italy. In 2018, William Reed Business Media named Osteria Francescana the best restaurant in the world that year in their annual The World's 50 Best Restaurants. In 2016 and 2018, it was rated as the world's best restaurant in the World's 50 Best Restaurants. It was the first Italian restaurant to earn the award. It was also second best in 2015 and third best in 2013 and 2014.`,
  //   price: 4,
  // },
  
];
export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}