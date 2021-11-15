import React from 'react'
import "./Filters.css";
import Filter_Item from './Filter_Item';


function Filters({list}) {
    return (
        <div>
           <div className='max-width filters'>
               {/* check if list exist or not */}
               {list && list.map((ele)=>{
                   return (
                   <div>
                       <Filter_Item name={ele.name} key={ele.key} image={ele.icon} />
                   </div>)
               })}

           </div>

        </div>
    )
}

export default Filters
