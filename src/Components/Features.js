import React from 'react'

// icons import
import { IoCartOutline } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { MdOutlineLocalOffer } from "react-icons/md";

const Features = () => {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center md:px-24 gap-4 my-10 '>
         <div className='flex justify-center hover:cursor-pointer gap-3 p-4 hover:shadow-md rounded-lg'>
            <IoCartOutline className='text-slate-400 text-[60px] font-bold' />
            <div>
               <b className='text-xl font-normal'>FREE DELIVERY</b>
               <p className='text-lg opacity-70'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
         </div>
         <div className='flex justify-center hover:cursor-pointer gap-3 p-4 hover:shadow-md rounded-lg'>
            <IoCartOutline className='text-slate-400 text-[60px] font-bold' />
            <div>
               <b className='text-xl font-normal'>QUALITY GUARANTEE</b>
               <p className='text-lg opacity-70'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
         </div>
         <div className='flex justify-center hover:cursor-pointer gap-3 p-4 hover:shadow-md rounded-lg'>
            <MdOutlineLocalOffer className='text-slate-400 text-[60px] font-bold' />
            <div>
               <b className='text-xl font-normal'>DAILY OFFERS</b>
               <p className='text-lg opacity-70'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
         </div>
         <div className='flex justify-center hover:cursor-pointer gap-3 p-4 hover:shadow-md rounded-lg'>
            <GrSecure className='text-slate-400 text-[60px] font-bold' />
            <div>
               <b className='text-xl font-normal'>100% SECURE PAYMENT</b>
               <p className='text-lg opacity-70'>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
            </div>
         </div>
      </div>
   )
}

export default Features
