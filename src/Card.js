import React from "react";

const Card = ({ data }) => {
  const { name, image, description, price } = data;
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='description'>
        <div className='top'>
          <h2>{name}</h2>
          <span>{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
