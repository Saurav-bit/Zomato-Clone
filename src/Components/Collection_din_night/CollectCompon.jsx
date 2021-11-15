import React from 'react'
import "./CollectCompon.css"

function CollectCompon({item}) {
    return (
        <div>
            <div className='collect_cover'>
                <img src={item.image}
                className='collect_image'
                loading='lazy'/>
                
            
            <div className='kuch'></div>
            <div className='collect_text'>
                <div className='collect_text_name'>
                    {item.text}
                </div>
                <div className='collect_text_places'>
                    {item.places}
                    <i className='fi fi-ss-caret-right caret-icon'></i>
                    
                </div>

            </div>
            </div>
              
            
        </div>
    )
}


export default CollectCompon
