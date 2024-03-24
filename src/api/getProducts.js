import pendrive from "../assests/IN_USB-Black-Swivel-Pendrive-32gb_Overview.webp";
import coffeemaker from "../assests/coffeemaker.webp";
import toolkit from "../assests/toolkit.webp";
import toaster from "../assests/toaster.jpg";
import juicer from "../assests/juicer.webp";
import beer from "../assests/beer.jpg";

export const productsData = [
  {
    id: 1,
    name: "Kingston Pendrive",
    price: 10,
    rating: 4,
    image: `${pendrive}`,
    favorite: false,
  },
  {
    id: 2,
    name: "Philips Juicer",
    price: 15,
    rating: 3,
    image: `${juicer}`,
    favorite: false,
  },
  {
    id: 3,
    name: "philips CoffeeMaker",
    price: 20,
    rating: 5,
    image: `${coffeemaker}`,
    favorite: false,
  },
  {
    id: 4,
    name: "philips Toaster",
    price: 25,
    rating: 4,
    image: `${toaster}`,
    favorite: false,
  },
  {
    id: 5,
    name: "Bosch Toolkit",
    price: 30,
    rating: 3,
    image: `${toolkit}`,
    favorite: false,
  },
  {
    id: 6,
    name: "Samsung Pendrive",
    price: 35,
    rating: 4,
    image: `${pendrive}`,
    favorite: false,
  },
  {
    id: 7,
    name: "Makita Toolkit",
    price: 40,
    rating: 5,
    image: `${toolkit}`,
    favorite: false,
  },
  {
    id: 8,
    name: "ken CoffeeMaker",
    price: 45,
    rating: 4,
    image: `${coffeemaker}`,
    favorite: false,
  },
  {
    id: 9,
    name: "Sandisk Pendrive",
    price: 50,
    rating: 3,
    image: `${pendrive}`,
    favorite: false,
  },
  {
    id: 11,
    name: "Beer Glass",
    price: 55,
    rating: 4,
    image: `${beer}`,
    favorite: false,
  },
  {
    id: 12,
    name: "Transcend Pendrive",
    price: 55,
    rating: 4,
    image: `${pendrive}`,
    favorite: false,
  },
  {
    id: 13,
    name: "Taperia Toolkit",
    price: 55,
    rating: 4,
    image: `${toolkit}`,
    favorite: false,
  },
  {
    id: 14,
    name: "Sony Pendrive",
    price: 55,
    rating: 4,
    image: `${pendrive}`,
    favorite: false,
  },
  {
    id: 15,
    name: "My CoffeeMaker",
    price: 55,
    rating: 4,
    image: `${coffeemaker}`,
    favorite: false,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsData);
    }, 200); // Simulating delay for API call
  });
};
