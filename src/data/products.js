import productImage from "../assets/food.jpg";

const products = [
  {
    image: productImage,
    productId: "beshbarmak",
    title: "Beshbarmak",
    description: `Beshbarmak is one of the most favorite and traditional Kyrgyz dishes, having Turkic roots. Beshbarmak is a chopped meat with noodles, onions and meat broth. It is noteworthy that traditionally beshbarmak is eaten by hands. This is the reason for the name of the dish: in translation from Kyrgyz, “beshbarmak” means “five fingers”. Beshbarmak is widespread mainly in the north of Kyrgyzstan, in Chui, Talas and Naryn oblasts. Beshbarmak without noodles is called “Naryn”.

    `,
    price: 150,
  },
  {
    image: productImage,
    productId: "kuurdak",
    title: "Kuurdak",
    description: `Kuurdak is a fried meat with potatoes, onions and a lot of spices. It is cooked almost everywhere in Kyrgyzstan`,
    price: 200,
  },
  {
    image: productImage,
    productId: "boorsok",
    title: "Boorsok",
    description: `Boorsok is the most favorite kind of bread for holidays. It is a small piece of yeast dough fried in oil. Bohorsoks are tasty, it can be both salty and sweet.`,
    price: 100,
  },
  {
    image: productImage,
    productId: "plov",
    title: "Plov",
    description: `Plov is a traditional Central Asian dish that comes from the Ferghana Valley and is widespread in southern Kyrgyzstan. The basis of the dish is rice, carrots and meat, first fried and then cooked. There is no canonical recipe for cooking plov and practically every region has its own recipe. The quantity of meat, rice and carrot can vary, additional ingredients such as garlic, raisins, dried apricots, nuts, etc., can be added. However, the most delicious is the plov from Uzgen rice, which is prepared in Uzgen and Osh.`,
    price: 200,
  },
  {
    image: productImage,
    productId: "kurut",
    title: "Kurut",
    description: `This is a sour-milk product, in the form of small dried beads, a kind of Central-Asian cheese. The history of kurut goes deep into the nomadic antiquity of the Turkic peoples. Manufacturing kuruts was one of the few ways to stock up provisions for a long time. Kurutas are noteworthy for the fact that they can be stored literally for years. The taste is salty and sourish. It is widely distributed throughout the territory of Kyrgyzstan.`,
    price: 20,
  },
];

export function getProducts() {
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}