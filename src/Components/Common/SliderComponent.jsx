import React from "react";
import "./SliderComponent.css";

function SliderComponent({ item }) {
  return (
    <div>
      <div className="cover">
        <img src={item.image} alt={item.name} className="image-cover" />
      </div>
      <div className="cover-name">{item.name}</div>
    </div>
  );
}

export default SliderComponent;
