import React, { useState } from "react";
import Card from "./Card";
import { hotelData } from "../data/hotelData.js";
import Filter from "./Filter";

const HotelPage = () => {
   const [hotels] = useState(hotelData);
 
   const [filters, setFilters] = useState({
     name: '',
     ratings: []
   });
 
   const handleFilterChange = (event) => {
    const {name, value} = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
   };

   const filteredHotels = hotels.filter(hotel => hotel.name.toLowerCase().includes(filters.name.toLowerCase()));

    return (
      <>
        <h2>550 Hotel Available in Melbourne</h2>
        <div className="c-hotel-page">
          <div className="c-hotel-page__filter">
            <Filter 
             onChange={handleFilterChange}
             filters={filters}
            />
          </div>          
          <div className='c-hotel-page__content'>
              {filteredHotels.map(hotel => {
                return (
                  <Card key={hotel.id}
                    name={hotel.name}
                    image={hotel.image}
                    roomType={hotel.roomType}
                    rating={hotel.rating}
                    price={hotel.price}
                    id={hotel.id}
                  />
                )
              })}
          </div>
        </div>
      </>
    )
}

export default HotelPage;