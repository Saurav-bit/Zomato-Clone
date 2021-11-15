import React from 'react'
import "./TopBrandItem.css"

function TopBrandItem({item}) {
    return (
        <div >
            <div className='main-wrapper'>
                <img src={item.image}
                alt={item.time}
                className='image' />
            </div>
            <div className='time'>
              
               {item.time}
                    
            </div>

           
        </div>
    )
}

export default TopBrandItem
