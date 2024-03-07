import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons Import
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

const Navabar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const AddtoCartProduct = useSelector(state => state.addtocart);
  const WishListProduct = useSelector(state => state.wishlist);

  const toggleNav = () => {
    setShowSideNav((showNav) => !showNav);
  };
  return (
    <div className=''>
      <div className='flex items-center justify-between sticky top-0 left-0 shadow-md px-10 md:px-24 py-5 text-gray-600'>
        <h1 className='text-xl md:text-3xl font-thin'>Apple<b className='font-bold'>Store<b className='font-xl font-extrabold'>.</b></b></h1>
        <div className='md:flex justify-center items-center hidden gap-4  md:text-xl font-semibold'>
          <Link to='/'><li className='hover:text-gray-800 hover:cursor-pointer list-none px-1 mx-1'>Home</li></Link>
          <Link to='/Shop'><li className='hover:text-gray-800 hover:cursor-pointer list-none px-1 mx-1'>Shop</li></Link>
          <li className='hover:text-gray-6800 hover:cursor-pointer list-none px-1 mx-1'>Contact</li>
        </div>

        <div className='icons flex gap-3 justify-center items-center'>
          <Link to={'/Search'}><IoIosSearch className='font-semibold opacity-80 hover:opacity-100 text-lg md:text-2xl hover:cursor-pointer hover:text-gray-600' /></Link>
          <Link className='relative' to={"/AddtoCart"}><BsCart3 className='font-semibold opacity-80 hover:opacity-100 text-lg  md:text-2xl hover:cursor-pointer hover:text-gray-600' /><span className='top-0 right-0 bg-black text-white rounded-lg p-1 w-4'>{AddtoCartProduct.length}</span></Link>
          <Link className='relative' to={"/WishList"}><IoMdHeartEmpty className='font-semibold opacity-80 hover:opacity-100 text-lg  md:text-2xl hover:cursor-pointer hover:text-gray-600' /><span className='top-0 right-0 bg-black text-white text-sm rounded-lg p-1 w-4'>{WishListProduct.length}</span></Link>
          {showSideNav ? <CiMenuFries onClick={toggleNav} className='block md:hidden text-lg' /> : <CiMenuBurger onClick={toggleNav} className='block md:hidden text-lg' />}
        </div>
        {/* hgG */}
      </div>
      <div style={{
        transform: `translateX(${showSideNav ? '0' : '-1000px'})`,
        zIndex: 100,
        transition: '.4s ease-in-out',
      }}
        className='absolute top-16 right-0 p-10 w-[10rem] h-[100vh] md:hidden bg-white justify-center items-center text-lg font-semibold'
      >
        <Link to='/'><li className='hover:text-gray-800 hover:cursor-pointer list-none px-1 mx-1'>Home</li></Link>
        <Link to='/Shop'><li className='hover:text-gray-800 hover:cursor-pointer list-none px-1 mx-1'>Shop</li></Link>
        <li className='hover:text-gray-6800 hover:cursor-pointer list-none px-1 mx-1'>Contact</li>
      </div>

    </div>
  )
}
export default Navabar;
