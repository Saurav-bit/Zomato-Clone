
import { color } from '@mui/system';
import React from 'react'

function CaraouselPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style,
             display: "flex" ,
             borderRadius:"50%",
            
             justifyContent:"center",
             alignContent:"center",
             padding:"4px" }}
        onClick={onClick}
      />
    )
}

export default CaraouselPrevArrow
