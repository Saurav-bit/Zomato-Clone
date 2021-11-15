import React from 'react'

function CaraouselNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, 
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"50%",
            padding:"4px", 
            
            }}
        onClick={onClick}
      />
    )
}

export default CaraouselNextArrow

// function SampleNextArrow(props) {
    
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }