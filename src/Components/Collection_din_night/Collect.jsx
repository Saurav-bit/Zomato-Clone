
import React from 'react'
import "./Collect.css"
import Slider from "react-slick";
import CollectCompon from './CollectCompon';
import CaraouselNextArrow from '../Common/CaraouselNextArrow';
import CaraouselPrevArrow from '../Common/CaraouselPrevArrow';

const settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CaraouselNextArrow/>,
    prevArrow: <CaraouselPrevArrow/>,
  };
  
function Collect({list,name,para}) {
    return (
        <div>
            <div className='outer'>
                <div className='max-width'>
                    <div className='collections-name'>
                        {name}
                    </div>
                    <div className='collections-para'>
                        {para}
                    </div>

                    <div>
                        <Slider {...settings} >
                            {list.map((item)=>{
                                return <CollectCompon item={item}/>


                            })
                            }

                        </Slider>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default Collect
