import React from 'react'
import "./ExploreCard.css"

function ExploreCard({item}) {
    return (
        <div className='wrapper-explore-card'>
            <div className='image-resto'>
                <img src={item.image}
                alt={item.name}
                className='image-card-explore'
               
               />
               <div className='delivery-time'>
                   {item.time}
               </div>
               <div className='delivery-discount'>
                {item.discount}
                </div>
            </div>
            <div className='row-names'>
                <div className='res-name'>
                    {item.name}

                </div>
                <div>
                <div className='res-rating abs-cen'>
                    {item.rating} 
                    
                    <i className="fi fi-ss-star abs-cen"></i>
                   
                </div>
               
                    
                </div>
                

            </div>
            <div className='res-price-per'>
                ₹{item.price} for one

                </div>
                   
          
          

        </div>
    )
}

export default ExploreCard
