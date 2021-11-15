import React from 'react'
import Slider from 'react-slick';
import CaraouselNextArrow from '../Common/CaraouselNextArrow';
import CaraouselPrevArrow from '../Common/CaraouselPrevArrow';
import TopBrandItem from './TopBrandItem';
import "./TopBrands.css";

const brands=[
    {
        id:1,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
        time:"29 Min",
    },
    {
        id:2,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
        time:"30 Min",
    },
    {
        id:3,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
        time:"25 Min",
    },
    {
        id:4,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/f1013e3475b7cf900cea61e101c6d450_1605099474.png?output-format=webp",
        time:"23 Min",
    },
    {
        id:5,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
        time:"33 Min",
    }, 
    {
        id:6,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
        time:"20 Min",
    },
    {
        id:7,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
        time:"40 Min",
    },
    {
        id:8,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
        time:"15 Min",
    },
    {
        id:9,
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/4cbca3d1f9e7a6753bce30ba8b122bad_1566552748.png?output-format=webp",
        time:"20 Min",
    },

    
    
    
    

]
const settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CaraouselNextArrow/>,
    prevArrow: <CaraouselPrevArrow/>,
  };
  


function TopBrands() {
    return (
        <div className='wrapper-brands'>
            <div className='max-width' >
              <div className='collection-title'>
              Top brands for you
              </div>

              <div className='brands'>
                  <Slider {...settings}>
                      {brands.map((item)=>{
                          return (
                              <TopBrandItem item={item} className="item-wrap" />
                          );

                      })}
                      </Slider>

              </div>
            </div>
            
        </div>
    )
}

export default TopBrands
