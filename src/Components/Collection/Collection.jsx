import React from "react";
import "./Collection.css";
import Slider from "react-slick";
import CaraouselPrevArrow from "../Common/CaraouselPrevArrow";
import CaraouselNextArrow from "../Common/CaraouselNextArrow";
import SliderComponent from "../Common/SliderComponent";


const settings = {
 
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CaraouselNextArrow/>,
  prevArrow: <CaraouselPrevArrow/>,
};


function Collection({Delivery_items}) {
  return (
    <div className="collection-wrapper">
      <div className="max-width">
        <div className="collection-title">Inspiration for your first order</div>
        <div>
          {/* <Slider /> */}
          <Slider {...settings}>
              {Delivery_items.map((item) =>{
                  return (
                      <SliderComponent item={item}/>
                  );
                  
              }
              )}
              </Slider>

              
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}

          
        </div>
      </div>
    </div>
  );
}

export default Collection;
