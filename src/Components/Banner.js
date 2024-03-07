import React from 'react'

const Banner = ({ text1, text2, text3, btnText, imgSrc }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center md:px-24 px-4 py-5 bg-slate-100'>
            <div className='font-thin py-4 order-2 md:order-1 justify-center'>
                <h2 className='text-4xl md:text-7xl'>{text1}</h2>
                <h2 className='text-4xl md:text-7xl'>{text2}</h2>
                <h2 className='text-4xl md:text-7xl'>{text3}.</h2>
                <button className='px-6 md:px-8 py-2 mt-6 font-thin text-lg md:text-xl text-white bg-black hover:cursor-pointer'>
                    {btnText}
                </button>
            </div>
            <div className='order-1 md:order-2 justify-center'>
                <img src={imgSrc} className='h-[500px] justify-end' alt='apple watch' />
            </div>
        </div>
    )
}

export default Banner
