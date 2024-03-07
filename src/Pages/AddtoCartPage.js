import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproductfromcart, reducequanitity, updatequantity } from '../features/addtocartSlice/addtocartSlice';

// Icons Import
import { MdOutlineDelete } from "react-icons/md";

const AddtoCartPage = () => {
  const dispatch = useDispatch();
  const CartProduct = useSelector(state => state.addtocart);

  // Total Calculation
  const Total = () => {
    const total = CartProduct.reduce((accumulator, product) => accumulator + parseFloat(product.price) * product.quantity, 0);
    return total;
  }

  const reduceQauntity = (product) => {
    dispatch(reducequanitity({
      id: product.id
    }))
  }
  const increaseQauntity = (product) => {
    if (product.quantity === product.inStock) {
      alert(`Sorry! You cannot add more quantity of product. Because inStock only ${product.inStock} avaiable.`)
    }
    else {
      dispatch(updatequantity({
        id: product.id,
      }))
    }
  }
  const deleteProduct = (ID) => {
    dispatch(deleteproductfromcart({
      id: ID
    }))
  }

  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1 className='text-3xl font-semibold'>{CartProduct.length === 0 ? 'Your Cart is Empty!' : 'Your Cart...'}</h1>
      {
        CartProduct.map((product, i) => (
          <div key={i} className='grid grid-cols-2 md:grid-cols-4 justify-center items-center md:gap-2 my-3'>
            <div className='relative p-2 w-40'>
              <img src={product.imageSrc} alt={`product- ${product.productName}`} className='left-0 w-[100px] h-[100px] object-cover ' />
            </div>
            <div className='p-2'>
              <h2 className='font-bold text-xl'>{product.productName}</h2>
              <p className='font-semibold text-lg'>{product.category} &nbsp; {product.price}$</p>
            </div>
            <div className='flex justify-start md:justify-center items-center p-2'>
              <button onClick={() => increaseQauntity(product)} className='font-bold text-md px-2 py-1 border-2 rounded-md bg-gray-500'>+</button>
              <p className='p-1 text-center rounded-md border-2 border-gray-500 w-10'>{product.quantity}</p>
              <button onClick={() => reduceQauntity(product)} className='font-bold text-md px-2 py-1 border-2 rounded-md bg-gray-500'>-</button>
            </div>
            <div className='flex justify-start md:justify-center gap-4 text-2xl hover:cursor-pointer p-2'>
              <button onClick={() => deleteProduct(product.id)}><MdOutlineDelete className='font-semibold' /></button>
            </div>
          </div>
        ))
      }
      <div className=''>
        <div className='w-72 h-1 bg-black my-2 rounded-md' />
        <div className='grid grid-cols-2 py-4 text-lg w-full place-items-center'>
          <div className='text-lg md:text-xl'>Total</div>
          <div className='text-lg md:text-xl text-thin'>{Total()}$</div>
        </div>
      </div>
    </div>
  )
}

export default AddtoCartPage
