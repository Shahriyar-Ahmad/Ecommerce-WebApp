// ProductCard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { AllProductsData } from '../Assets/ProductData/AllProductsData';
import { togglewishlist } from '../features/wishlistSlice/wishlistSlice';

const ProductCard = ({ ID, imageSrc, productName, productPrice }) => {
  const dispatch = useDispatch();
  const CurrentProduct = AllProductsData.find(product => product.id === ID);
  const WishListProduct = useSelector((state) => state.wishlist);
  const ExistinWishList = WishListProduct.find(product => product.id === ID);

const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      setImageLoaded(true);
    };

    // Clean up the event listener when the component unmounts
    return () => {
      image.onload = null;
    };
  }, [imageSrc]);
  const ToggleWishList = () => {
    dispatch(togglewishlist({
      id: CurrentProduct.id,
      imageSrc: CurrentProduct.imageSrc,
      productName: CurrentProduct.productName,
    }))
  }
  return (
    <div className="relative group cursor-pointer h-[350px] w-[250px]">
      <div className='flex flex-col'>
        <div className='overflow-hidden'>
        {!imageLoaded && (
        <div className="animate-pulse w-full h-[300px] bg-gray-300"></div>
      )}
      <img
        src={imageSrc}
        alt={productName}
        className={`w-full h-[300px] object-cover transition-transform transform ${
          imageLoaded ? 'group-hover:scale-105' : 'opacity-0'
        }`}
      />
        </div>
        <div className='flex justify-between'>
          <b className='text-xl font-normal'>{productName}</b>
          <span className='text-lg opacity-90'>{productPrice}$</span>
        </div>

      </div>
      <div className='absolute top-5 right-4 p-2  bg-black rounded-md'>
        {ExistinWishList ? <FaHeart className='text-xl m-auto text-gray-500' onClick={() => ToggleWishList()} /> : <IoMdHeartEmpty className='text-xl m-auto text-gray-500' onClick={() => ToggleWishList()} />}
      </div>
      <div className="absolute bottom-24 left-10 ">
        <Link to={`/Product/${ID}`}>
          <button className="flex gap-2 px-8 py-2 font-thin text-sm text-white bg-black rounded ">
            VIEW PRODUCT
            <BsCart3 className='font-semibold opacity-80 hover:opacity-100  md:text-md hover:cursor-pointer hover:text-gray-600' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
