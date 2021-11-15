import React from 'react'
import Collect from '../Collection_din_night/Collect';
import ExploreSection from '../Common/ExploreSection';
import Filters from '../Filter_Section/Filters';
import "./Night.css"
const filters = [
    {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders"></i>,
      name: "Filters",
    },
    {
      id: 2,
      name: "Pro Offers",
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
      name: "Pubs & Bars",
    },
    {
      id: 6,
      name: "Serves Alcohol",
    },
   

  ];

const Collection_list=[
    {
        id:1,
        image:"https://b.zmtcdn.com/data/collections/bb6a35086c983af31c536a3cfe886f1b_1631616165.jpg",
        text:"Microbreweries",
        places:"19 Places"

    },
    {
        id:2,
        image:"https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg",
        text:"Where's The Party",
        places:"28 Places"

    },
    
    {
        id:3,
        image:"https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
        text:"Bar-Gain",
        places:"17 Places"

    },
    
    {
        id:4,
        image:"https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
        text:"Artisan Cocktails",
        places:"18 Places"

    },
    
    {
        id:5,
        image:"https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
        text:"Beer In a Bar",
        places:"9 Places"

    },
    
    {
        id:6,
        image:"https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg",
        text:"Night Bars",
        places:"15 Places"

    },
    
    {
        id:7,
        image:"https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        text:"Beer Lounges",
        places:"12 Places"

    },
    

];

const explore=[
  {
      id:1,
      image:"https://b.zmtcdn.com/data/pictures/1/19081041/47a5847e8fb03c19c5a0c2be7ebefd55_featured_v2.jpg",
      name:"Sky House",
      time:"24 Min",
      rating:"4.0",
      price :"1000",
      discount:"25%"

  },
  {
      id:2,
      image:"https://b.zmtcdn.com/data/pictures/2/18627592/0ccaf5848155e1a45d9b4cdb449c7714_featured_v2.jpg",
      name:"Hook Pub N Kitchen",
      time:"41 Min",
      rating:"3.5",
      price :"800",
      discount:"10%"
  },
  {
      id:3,
      image:"https://b.zmtcdn.com/data/pictures/4/19616834/d52b4916bf66dc11146c3d2eea7982d9_featured_v2.jpg",
      name:"Valhalla",
      time:"60 Min",
      rating:"3.8",
      price :"1500",
      discount:"60%"
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
      id:5,
      image:"https://b.zmtcdn.com/data/pictures/4/19878914/65d980182830156a6456b134b8fba95c_featured_v2.jpg",
      name:"The King Cafe Resto",
      time:"20 Min",
      rating:"3.5",
      price :"800",
      discount:"40%"
  },
  {
      id:6,
      image:"https://b.zmtcdn.com/data/pictures/5/18710755/627a2e2ffe3713bf9cf8540e69dcbd26_featured_v2.jpg",
      name:"Crops & Curries",
      time:"30 Min",
      rating:"4.0",
      price :"550",
      discount:"45%"
  },
]

function NightLife() {
    return (
        <div>
            <Collect list={Collection_list} name="Collections" para="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends" />
            <Filters list={filters}/>
            <ExploreSection explore={explore} name="Nightlife Restaurants in Ghaziabad" />
        </div>
    )
}

export default NightLife
