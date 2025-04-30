import React from 'react';
import { useParams } from 'react-router-dom';
import { hotelData } from "../data/hotelData.js";

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotelData.find(hotel => hotel.id === parseInt(id));

  return (
    <div className="c-hotel-detail">
      <h1>{hotel.name}</h1>
      <div className="c-hotel-detail__content">
        <div className="c-hotel-detail__image">
            <img src={hotel.image} alt={hotel.name} />
        </div>
        <div className="c-hotel-detail__info">
            <div className="c-hotel-detail__price">${hotel.price} per night</div>
            <div className="c-hotel-detail__room-type">
                <span className="c-hotel-detail__label">Room type:</span> {hotel.roomType}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail; 