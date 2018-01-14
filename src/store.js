import createStore from "redux-zero";
let phone = [{
        name: "Samsung Galaxy S7 Edge G935F LTE 32GB Negro",
        price: '1,865.00',
        img: "img/celular/SS7Negro.jpg",
        class:'n'
    },
    {
        name: "Motorola Moto E4 Plus 16GB 2GB RAM 5000mAh Dual SIM – Negro",
        price: '579.00',
        img: "img/celular/motorolaE4Negro.jpg",
        class:'n'
    },
    {

        name: "Huawei Y7 Prime 32GB 3GB RAM 4G-Gris",
        price: '749.00',
        img: "img/celular/HuaweiY7Gris.jpg",
        class:'n'
    },
    {
        name: "Huawei P10 Lite 32GB 3GB RAM Libre De Fabrica – Negro",
        price: 4,
        img: "img/celular/HuaweiP10Negro.jpg",
        class:'hiddenn'
    },
    {
        name: "Samsung Galaxy S7 Edge G935F LTE 32GB Negro",
        price: '1,865.00',
        img: "img/celular/SS7Negro.jpg",
        class:'hiddenn'
    }];
const computer = [{
        name: "Laptop Asus X556UA-XX606D Intel Core I7-7500U 2.7GHz 4Gb 1TB 15.6''HD DVD-RW FreeDos",
        price: '1,799.00',
        img: "img/computer/Asus1.jpg",
        class:'n'
    },
    {
        name : "LG - Monitor IPS 29' Gamer Gaming Multitarea UltraWide 29 UM69G - B 2560 x1080 - Negro ",
        price: 0.00,
        img: "img/computer/LGMonitorIPS29Negro.jpg",
        class:'n'
    },
    {
        name: "CPU GAMER I5-7400 3.0GHZ 7TMA GENERACIÓN 16GB 1TB VIDEO GTX 1050TI 4GB ULTRA HD",
        price: 0.00,
        img: "img/computer/CPUGAMER.jpg",
        class:'n'
    },
    {
        name: "Lenovo Legion Y520-15IKBN Intel Core I5-7300HQ 2.5 GHz",
        price: 0.00,
        img: "img/computer/LenovoLegion.jpg",
        class:'hiddenn'
    },{
        name : "LG - Monitor IPS 29' Gamer Gaming Multitarea UltraWide 29 UM69G - B 2560 x1080 - Negro ",
        price: 0.00,
        img: "img/computer/LGMonitorIPS29Negro.jpg",
        class:'hiddenn'
    }]

const tablets = [{
        name: "LEOTEC TABLET 10.1' SUPERNOVA QI32 (IPS 1280*800 (16:10)-QUAD CORE-32GB-2GB-GPS-BT-HDMI-ANDROID 6.0)",
        price: 0,
        img: "img/tablets/LEOTECTABLET10.jpg",
        class:'n'
  },
  {
      name: "Tablet Disney Cars De 7¨ 3G Dual Sim Quad Core 1.3Ghz",
      price: 0,
      img:"img/tablets/TabletDisneyCars.jpg",
      class:'n'
  },
  {
      name: "Tablet Landbyte Landtab LT5545, 7 1280x800, Android 5.1, 8 GB, 1GB-Celeste",
      price: 0,
      img:"img/tablets/TabletLandbyteLandtabCeleste.jpg",
      class:'n'
  },
  {
      name:"Amazon - All New Kindle Fire 7 Tablet 8GB WIFI IPS Alexa - Negro",
      price: 0,
      img:"img/tablets/KindleFire7TabletNegro.jpg",
      class:'hiddenn'
  },
  {
      name: "Tablet Disney Cars De 7¨ 3G Dual Sim Quad Core 1.3Ghz",
      price: 0,
      img:"img/tablets/TabletDisneyCars.jpg",
      class:'hiddenn'
  }];
const initialState = {
    phone: phone,
    computer:computer,
    tablets:tablets,
    selected: 0
};

const store = createStore(initialState);
export default store;