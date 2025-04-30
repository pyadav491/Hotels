import React, { useState } from "react";
import Card from "./Card";
import { hotelData } from "../data/hotelData.js";
import Filter from "./Filter";

const HotelPage = () => {
    const [hotels] = useState([...hotelData].sort((a,b) => a.price - b.price));
    const initialRatings = [5, 4, 3, 2]; 
  
    const [filters, setFilters] = useState({
      name: '',
      ratings: initialRatings // All checkbox should be checked by default so should show all the ratings
    });
  
    const handleFilterChange = (type, value) => {
      if (type === 'name') {
        setFilters(prev => ({ ...prev, name: value }));
      } else if (type === 'ratings') { 
        setFilters(prev => ({ ...prev, ratings: value }));
      }
    };
  
    const filteredHotels = hotels.filter(hotel => {
      const nameMatch = hotel.name.toLowerCase().includes(filters.name.toLowerCase());
      const ratingMatch = filters.ratings.length === 0 
        ? false
        : filters.ratings.includes(Math.floor(hotel.rating));
      return nameMatch && ratingMatch;
    });
    return (
      <>
        <h2>550 Hotel Available in Melbourne</h2>
        <div className="c-hotel-page">
          <div className="c-hotel-page__filter">
            <Filter 
             onFilterChange={handleFilterChange}
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
              {filteredHotels.length === 0 && (
                <p>No Hotels match the current filters</p>
              )}
          </div>
        </div>
      </>
    )
}

export default HotelPage;