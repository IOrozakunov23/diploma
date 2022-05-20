import bismarckImage from "../assets/bismarck.jpg";
import tartufataImage from "../assets/tartufatata.jpg";
import francescanaImage from "../assets/francescana.jpg";
const products = [
  {
    image: bismarckImage,
    productId: "bismarck",
    title: "Bismarck",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.`,
    price: 150,
  },
  {
    image: tartufataImage,
    productId: "tartufata",
    title: "Tartufata",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.`,
    price: 200,
  },
  {
    image: francescanaImage,
    productId: "francescana",
    title: "Francescana",
    description: `Osteria Francescana is a restaurant owned and run by chef Massimo Bottura in Modena, Italy. In 2018, William Reed Business Media named Osteria Francescana the best restaurant in the world that year in their annual The World's 50 Best Restaurants. In 2016 and 2018, it was rated as the world's best restaurant in the World's 50 Best Restaurants. It was the first Italian restaurant to earn the award. It was also second best in 2015 and third best in 2013 and 2014.`,
    price: 100,
  },
];
export function getProducts() {
  return products;
}


export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}