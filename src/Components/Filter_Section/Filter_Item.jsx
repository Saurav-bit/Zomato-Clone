import React from 'react'
import "./Filter_item.css"

function Filter_Item(props) {
    return (
        <div className='hover_effect'>

        <div className='filter_item cur-po'>
            {props.image && props.image }
            <span className='filter_name' >{props.name }</span>
            
        </div>
        </div>
    )
}

export default Filter_Item
