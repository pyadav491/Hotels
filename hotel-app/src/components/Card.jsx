import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
    id,
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
            diamonds.push(<span key={i} className="o-diamond"></span>)
        }

        if(hasHalfdiamonds) {
            diamonds.push(<span key="6" className="o-diamond o-diamond--half"></span>)
        }

        return diamonds;
    };

    return (
        <Link to={`/hotel/${id}`} className="hotel-card-link">
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
                    <div className="c-card__right">
                        <div className="c-card__price">
                            <span>${price}</span>
                        </div>
                        <button className="o-button c-card__button"> 
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Card;