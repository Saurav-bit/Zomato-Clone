import React from 'react'
import ExploreCard from './ExploreCard';
import "./ExploreSection.css";



function ExploreSection({explore,name}) {
    
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>
            {name}
            </div>
            <div className='explore-grid'>
                {explore.map((item)=>{
                    return (<ExploreCard item={item} />  );
                })}
            </div>
            
            
        </div>
    )
}

export default ExploreSection
