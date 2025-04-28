import React from "react";
import PropTypes from 'prop-types';

const Card = ({
    name, 
    image, 
    rating, 
    roomType, 
    price
}) => {
    const ratingDiamonds = (rating) => {
        const diamonds = [];
        const fullDiamonds = Math.floor(rating);
        const hasHalfdiamonds = rating % 1 !== 0;

        for(let i=1; i<=fullDiamonds; i++) {
            diamonds.push(<span key={i} className="c-card__diamonds"></span>)
        }

        if(hasHalfdiamonds) {
            diamonds.push(<span key="6" className="c-card__diamonds c-card__diamonds--half"></span>)
        }

        return diamonds;
    };

    return (
        <div className="c-card">
            <div className="c-card__image" style={{backgroundImage:`url(${image})`}} />
            <div className="c-card__detail">
                <div className="c-card__info">
                    <h3>{name}</h3>
                    <span className="c-card__rating">
                        {ratingDiamonds(rating)}
                    </span>
                    <span className="c-card__text">
                        <span className="c-card__text-type">Room type:</span> 
                        {roomType}
                    </span>
                </div>
                <div className="c-card__price">
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Card;