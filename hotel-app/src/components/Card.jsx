import React from "react";

const Card = ({
    name, 
    image, 
    rating, 
    roomType, 
    price
}) => {
    return (
        <div className="c-card">
            <div className="c-card__image" style={{backgroundImage:`url(${image})`}} />
            <div className="c-card__detail">
                <div className="c-card__info">
                    <h5>{name}</h5>
                    <span></span>
                    <span>{roomType}</span>
                </div>
                <div className="c-card__price">
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;