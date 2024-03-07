import React from 'react'
// Icons Import
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removefromwishlist } from '../features/wishlistSlice/wishlistSlice';

const WishListPage = () => {
  const dispatch = useDispatch();
  const WishListProduct = useSelector(state => state.wishlist);
  const deleteFromWishList = (ID) => {
    dispatch(removefromwishlist({
      id: ID
    }))
  }
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1 className='text-3xl font-semibold'>{WishListProduct.length === 0 ? 'Your WishList is Empty!' : 'All Your Fevorite'}</h1>
      {
        WishListProduct.map((product, i) => (
          <div key={i} className='grid grid-cols-3 justify-center items-center gap-2 my-3'>
            <div className='p-2 justify-center'>
              <img src={product.imageSrc} alt={`product- ${product.productName}`} className='w-[100px] h-[100px]' />
            </div>
            <div className='p-2 justify-start'>
              <h2 className='font-bold text-xl'>{product.productName}</h2>
              <p className='font-semibold text-lg'>{product.category}</p>
            </div>
            <div className='justify-start text-2xl hover:cursor-pointer p-2'>
              <button onClick={() => deleteFromWishList(product.id)}><MdOutlineDelete className='' /></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default WishListPage
