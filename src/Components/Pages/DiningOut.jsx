import { ExplicitTwoTone } from '@mui/icons-material';
import React from 'react'
import Collect from '../Collection_din_night/Collect';
import ExploreSection from '../Common/ExploreSection';
import Filters from '../Filter_Section/Filters';
import "./Dining.css";

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
    {
      id: 6,
      name: "Serves Alcohol",
    },
   
    {
      id: 7,
      name: "Outdoor Seating",
    },
    {
      id: 8,
      name: "Open Now",
    },
    
  ];

const Collection_list=[
    {
        id:1,
        image:"https://b.zmtcdn.com/data/collections/1b959f49d1a130f16edd619de439eaba_1634888082.png?output-format=webp",
        text:"Live Sports Screening",
        places:"27 Places"

    },
    {
        id:2,
        image:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg",
        text:"Newly Opened",
        places:"13 Places"

    },
    
    {
        id:3,
        image:"https://b.zmtcdn.com/data/collections/31ddb8269f55451682fae6e98f20c4cb_1631689069.jpg",
        text:"Trending This Week",
        places:"30 Places"

    },
    
    {
        id:4,
        image:"https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg",
        text:"Best Of Delhi NCR",
        places:"137 Places"

    },
    
    {
        id:5,
        image:"https://b.zmtcdn.com/data/collections/534d15b97ec6a18a13d41d92f7a3c4f4_1631615781.jpg",
        text:"Taste of South Indian",
        places:"16 Places"

    },
    
    {
        id:6,
        image:"https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg?output-format=webp",
        text:"Great Cafes",
        places:"30 Places"

    },
    
    {
        id:7,
        image:"https://b.zmtcdn.com/data/collections/32d61d6a085b42314325b4bc148a761a_1616663414.jpg?output-format=webp",
        text:"For The Love of Chai",
        places:"12 Places"

    },
    

];

const explore=[
  {
      id:1,
      image:"https://b.zmtcdn.com/data/pictures/4/19684904/6c172536f6dfbc8af68696bd0070a244_featured_v2.jpg",
      name:"Baton Paratha House",
      time:"24 Min",
      rating:"3.4",
      price :"500",
      discount:"25%"

  },
  {
      id:2,
      image:"https://b.zmtcdn.com/data/pictures/5/19458885/6b18aa1ba9809d7e8c5d6ef2263ed854_featured_v2.jpg",
      name:"Shyam Rasoi",
      time:"41 Min",
      rating:"3.2",
      price :"400",
      discount:"50%"
  },
  {
      id:3,
      image:"https://b.zmtcdn.com/data/pictures/3/19576403/ffa6e3531a379211bde0392ea76c63e2_featured_v2.jpg",
      name:"Brother's Pizza",
      time:"37 Min",
      rating:"3.3",
      price :"450",
      discount:"40%"
  },
  {
      id:4,
      image:"https://b.zmtcdn.com/data/pictures/2/18688042/351c3e154088695d21414e84a09b0ea6_featured_v2.jpg",
      name:"The Flying Dutchman",
      time:"24 Min",
      rating:"4.5",
      price :"1900",
      discount:"30%"
  },
  {
      id:4,
      image:"https://b.zmtcdn.com/data/pictures/chains/2/301442/b79c8a6580623315397421732216716a_featured_v2.jpg",
      name:"Imperfecto",
      time:"42 Min",
      rating:"3.5",
      price :"1000",
      discount:"35%"
  },
  {
      id:4,
      image:"https://b.zmtcdn.com/data/pictures/chains/8/2008/32edfc4b9cee788d3a0921f0f5ea0fa9_o2_featured_v2.jpg?output-format=webp",
      name:"Hira Sweets",
      time:"24 Min",
      rating:"3.9",
      price :"150",
      discount:"30%"
  },
]

  
function DiningOut() {
    return (
        <div>
            <Collect list={Collection_list} name="Collections" para="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends"/>
            <Filters list={filters} />
            <ExploreSection explore={explore} name="Dine-Out Restaurants in Ghaziabad" />
        </div>
    )
}

export default DiningOut
