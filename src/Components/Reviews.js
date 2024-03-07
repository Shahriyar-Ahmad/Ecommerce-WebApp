import React, { useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import QouteIcon from "./../Assets/qouteicon.png";

const Reviews = ({ coustmerReviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }
  const showNextReview = () => [
    setCurrentIndex((prevIndex) => prevIndex + 1 < coustmerReviews.length ? prevIndex + 1 : prevIndex)
  ]

  const currentReview = coustmerReviews.filter((creview) => creview.id === currentIndex + 1)
  return (
    <div className='flex flex-col justify-center items-center md:px-24 py-8 relative'>
      <div>
        <img className='w-[7rem] h-[7rem] md:w-[150px] md:h-[150px] justify-center m-auto opacity-50' src={QouteIcon} alt='quote icon' />
      </div>
      {currentReview.map((review, index) => (
        <div key={index} className='flex flex-col md:w-[75%] w-[80%]'>
          <h3 className='font-thin md:text-4xl text-center'>{review.qoute}</h3>
          <div className='flex justify-center my-4 items-center md:text-2xl text-gray-500'>
            <IoIosStar />
            <IoIosStar /> 
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
          </div>
          <span className='font-normal md:text-xl text-center'>{review.name}</span>
        </div>
      ))}
      <button
        className={`absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 disabled:bg-gray-400 bg-gray-500 text-white px-2 md:px-4 py-5 md:py-12 rounded`}
        onClick={showPrevReview}
        disabled={currentIndex === 0}
      >
        <GrPrevious />
      </button>
      <button
        className={`absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 disabled:bg-gray-400 bg-gray-500 text-white px-2 md:px-4 py-5 md:py-12 rounded`}
        onClick={showNextReview}
        disabled={currentIndex + 1 === coustmerReviews.length}
      >
        <GrNext /> 
      </button>
    </div>
  )
}

export default Reviews
