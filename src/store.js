import createStore from "redux-zero";
let FOOD = [{
        name: "Samsung Galaxy S7 Edge G935F LTE 32GB Negro",
        price: '1,865.00',
        img: "img/celular/SS7Negro.jpg",
    },
    {
        name: "Motorola Moto E4 Plus 16GB 2GB RAM 5000mAh Dual SIM – Negro",
        price: '579.00',
        img: "img/celular/motorolaE4Negro.jpg",
    },
    {

        name: "Huawei Y7 Prime 32GB 3GB RAM 4G-Gris",
        price: '749.00',
        img: "img/celular/HuaweiY7Gris.jpg",
    },
    {
        name: "Huawei P10 Lite 32GB 3GB RAM Libre De Fabrica – Negro",
        price: 4,
        img: "img/celular/HuaweiP10Negro.jpg",
    }];
const computacion = [{
        name: "Laptop Asus X556UA-XX606D Intel Core I7-7500U 2.7GHz 4Gb 1TB 15.6''HD DVD-RW FreeDos",
        price: '1,799.00',
        img: "img/computer/Asus1.jpg"
    },
    {
name : "LG - Monitor IPS 29' Gamer Gaming Multitarea UltraWide 29 UM69G - B 2560 x1080 - Negro ",
        price: 0.00,
        img: "img/computer/LGMonitorIPS29Negro.jpg"
    },
    {
        name: "CPU GAMER I5-7400 3.0GHZ 7TMA GENERACIÓN 16GB 1TB VIDEO GTX 1050TI 4GB ULTRA HD",
        price: 0.00,
        img: "img/computer/CPUGAMER.jpg"
    },
    {
        name: "Lenovo Legion Y520-15IKBN Intel Core I5-7300HQ 2.5 GHz",
        price: 0.00,
        img: "img/computer/LenovoLegion.jpg"
    },
    {
        name: "Tekka maki",
        price: 6,
        description: "Tuna roll with wasabi. - 6 pieces",
        nutritional: [0.9559, 1.6395, 1.6395, 9.7847, 2.3386, 0.4771],
        img: "img/tekka-maki.jpg"
  },
  {
      name: "Hosomaki Mix",
      price: 17,
      description:"18 pieces.",
      nutritional:[2.683,2.858,2.858,23.8901,5.7099,0.4839],
      img:"img/hosomaki-mix.jpg"
  },
  {
      name: "California rolls",
      price: 7.75,
      description:"Crab sticks, avocado and cucumber. - 8 pieces",
      nutritional:[0.848,0.1205,0.1205,18.6541,4.4584,0.0174],
      img:"img/california-rolls.jpg"
  },
  {
      name:"Seattle rolls",
      price:8,
      description:"Smoked salmon. Cucumber. Cream cheese.",
      nutritional:[2.2802,2.309,2.309,18.6961,4.4685,0.2533],
      img:"img/seattle-rolls.jpg"
  },
  {
    name : "Spicy Tuna rolls",
    price : 6,
    description: "Spicy tuna, spring onion and avocado. - 6 pieces",
    nutritional : [1.0003,1.5621,1.5621,25.0911,5.9969,0.0474],
    img : "img/spicytuna-rolls.jpg"
    },
    {
        name: "Ebi rolls",
        price: 8,
        description: "King prawns, avocado and asparagus. - 8 pieces",
        nutritional: [2.826, 2.854, 2.854, 19.2756, 4.6070, 0.439],
        img: "img/ebi-rolls.jpg"

    },
    {
        name: "Chicken Teriyaki",
        price: 12,
        description: "Sauted chicken with teiyaki sauce.",
        nutritional: [1.0003, 1.5621, 1.5621, 25.0911, 5.9969, 0.0474],
        img: "img/chicken-teriyaki.jpg"

    },
    {
        name: "Salmon Teriyaki",
        price: 13.50,
        description: "Sauted salmon with teriyaki sauce.",
        nutritional: [2.826, 2.854, 2.854, 19.2756, 4.6070, 0.439],
        img: "img/salmon-teriyaki.jpg"

    },
    {
        name: "Gohan",
        price: 3.00,
        description: 'Steamed rice.',
        nutritional: ["2.4622", "2.672", "2.672", "25.1129", "6.0021", "0.3426"],
        img: "img/gohan.jpg"
    },
    {
        name: "Tori Katsu",
        price: 11.00,
        description: 'Steamed rice.',
        nutritional: ["2.4622", "2.672", "2.672", "25.1129", "6.0021", "0.3426"],
        img: "img/tori-katsu.jpg"
    },
    {
        name: "Yaki Udon",
        price: 11.50,
        description: 'Steamed rice.',
        nutritional: ["2.4622", "2.672", "2.672", "25.1129", "6.0021", "0.3426"],
        img: "img/yaki-udon.jpg"
    }
];
const initialState = {
    food: FOOD,
    selected: 0
};

const store = createStore(initialState);
export default store;