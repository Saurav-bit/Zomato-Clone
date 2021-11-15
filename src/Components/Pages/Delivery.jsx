import React from "react";
import "./Delivery.css";
import Filters from "../Filter_Section/Filters";
import Collection from "../Collection/Collection";
import TopBrands from "../TopBrands/TopBrands";
import ExploreSection from "../Common/ExploreSection";

const filters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders"></i>,
    name: "Filters",
  },
  {
    id: 2,
    name: "Pure veg",
  },
  {
    id: 3,
    icon: <i class="fi fi-rr-apps-sort"></i>,
    name: "Delivery",
  },
  {
    id: 4,
    name: "Rating : 4.0",
  },
  {
    id: 5,
    name: "Great Offers",
  },
];

const explore=[
    {
        id:1,
        image:"https://b.zmtcdn.com/data/pictures/chains/8/2008/32edfc4b9cee788d3a0921f0f5ea0fa9_o2_featured_v2.jpg?output-format=webp",
        name:"Hira Sweets",
        time:"24 Min",
        rating:"3.9",
        price :"150",
        discount:"30%"

    },
    {
        id:2,
        image:"https://b.zmtcdn.com/data/pictures/4/19639454/1d6ec16a7209fc0fa44ef11e607d96f8_o2_featured_v2.jpg?output-format=webp",
        name:"South Indian Food Factory",
        time:"41 Min",
        rating:"3.6",
        price :"250",
        discount:"50%"
    },
    {
        id:3,
        image:"https://b.zmtcdn.com/data/pictures/6/19158616/f1521767745233b5fcfcf28c9bd475cf_o2_featured_v2.jpg?output-format=webp",
        name:"Nazeer Foods",
        time:"37 Min",
        rating:"3.5",
        price :"250",
        discount:"40%"
    },
    {
        id:4,
        image:"https://b.zmtcdn.com/data/pictures/chains/1/171/0094c2b5485c4c2f52c931306442269b_o2_featured_v2.jpg?output-format=webp",
        name:"McDonald's",
        time:"26 Min",
        rating:"4.3",
        price :"200",
        discount:"20%"
    },
    {
        id:4,
        image:"https://b.zmtcdn.com/data/pictures/chains/7/147/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg",
        name:"Subway",
        time:"25 Min",
        rating:"4.1",
        price :"250",
        discount:"10%"
    },
    {
        id:4,
        image:"https://b.zmtcdn.com/data/pictures/chains/1/18345461/63371e1c88ea433b1936caa675f6b4c8_o2_featured_v2.jpg",
        name:"Wakhra Swaad",
        time:"31 Min",
        rating:"4.1",
        price :"250",
        discount:"60%"
    },
    {
      id:5,
      image:"https://b.zmtcdn.com/data/pictures/chains/1/931/50379406931033fbc83f5eddf5bfbd74_o2_featured_v2.jpg",
      name:"Wakhra Swaad",
      time:"27 Min",
      rating:"4.1",
      price :"250",
      discount:"15%"
  },
  {
    id:6,
    image:"https://b.zmtcdn.com/data/pictures/chains/4/18555894/c3475c44105ab07b22c8f73e8ff11e0f_o2_featured_v2.jpg",
    name:"The Punjabi Junction",
    time:"31 Min",
    rating:"4.0",
    price :"250",
    discount:"50%"
},
{
  id:7,
  image:"https://b.zmtcdn.com/data/pictures/chains/1/18345461/63371e1c88ea433b1936caa675f6b4c8_o2_featured_v2.jpg",
  name:"Wakhra Swaad",
  time:"31 Min",
  rating:"4.1",
  price :"250",
  discount:"60%"
},
{
  id:8,
  image:"https://b.zmtcdn.com/data/pictures/3/3843/4bcdfa841b749e3399e72088aa22b9f4_o2_featured_v2.jpg",
  name:"Rasoi Deliver",
  time:"35 Min",
  rating:"3.7",
  price :"200",
  discount:"40%"
},
{
  id:9,
  image:"https://b.zmtcdn.com/data/pictures/chains/0/550/a915df22032cd899f9cab92e1bb57c8c_o2_featured_v2.jpg",
  name:"Haldiram's",
  time:"20 Min",
  rating:"4.9",
  price :"250",
  discount:"5%"
},
{
  id:10,
  image:"https://b.zmtcdn.com/data/pictures/chains/0/9670/acd2de3ac05764e4335abf0c8eb0fc4d_o2_featured_v2.jpg",
  name:"Shree Rathnam",
  time:"31 Min",
  rating:"3.7",
  price :"150",
  discount:"20%"
},
]

const Delivery_items = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    name: "Chicken",
    image:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 3,
    name: "Burger",
    image:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 4,
    name: "Paneer",
    image:
      "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
  },
  {
    id: 5,
    name: "Rolls",
    image:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 6,
    name: "Chaat",
    image:
      "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
  },
  {
    id: 7,
    name: "Momos",
    image:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
      id:8,
      name:"Dal",
      image:
      "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png",
  },
  {
    id:9,
    name:"Chaap",
    image:
    "https://b.zmtcdn.com/data/o2_assets/efa0232fa263fd8b97ecf1c009e1b4801632716697.png",
},
{
    id:10,
    name:"Cake",
    image:
    "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
},
{
    id:11,
    name:"Paratha",
    image:
    "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
},
];


function Delivery() {
  return (
    <div>
      <div>
        <Filters list={filters} />
      </div>
      <div>
        <Collection Delivery_items={Delivery_items}/>
      </div>
      <div>
        <TopBrands />
      </div>
      <div>
        <ExploreSection explore={explore} name="Ghaziabad Restaurants"/>
      </div>
    </div>
  );
}

export default Delivery;
