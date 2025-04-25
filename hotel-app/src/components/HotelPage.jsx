import React, { useState } from "react";
import Card from "./Card";
import { hotelData } from "../data/hotelData.js";

const HotelPage = () => {
  const [hotels] = useState(hotelData);

    return (
      <>
        <h2>550 Hotel Available in Melbourne</h2>
        <div class="c-hotel-page">
          <div className='c-filter u-hide-tablet'>
            <h5>Filter Results</h5>
          </div>
          <div className='c-card__container'>
              {hotels.map(hotel => {
                return (
                  <Card key={hotel.id}
                    name={hotel.name}
                    image={hotel.image}
                    roomType={hotel.roomType}
                    rating={hotel.rating}
                    price={hotel.price}
                  />
                )
              })}
          </div>
        </div>
      </>
    )
}

export default HotelPage;