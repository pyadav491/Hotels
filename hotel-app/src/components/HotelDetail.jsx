import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hotel Detail Page</h1>
      <p>Hotel ID: {id}</p>
    </div>
  );
};

export default HotelDetail; 