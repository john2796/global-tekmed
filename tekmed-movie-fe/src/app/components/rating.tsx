import React from 'react';
import "./pagination.css"
import { FaStar } from "react-icons/fa";


const Rating: React.FC = () => {
  return (
    <div className="rating">
      <FaStar className='icons' />
      <FaStar className='icons' />
      <FaStar className='icons' />
      <FaStar className='icons' />
      <FaStar className='icons' />
    </div>
  );
};

export default Rating;
