import React from 'react'

const Subscribe = () => {
    return (
        <div className='md:px-24 my-5 py-4'>
            <div className='flex flex-wrap justify-center items-center opacity-90 bg-black py-20 md:gap px-5'>
                <div className='md:text-xl text-white'>
                    <h2 className='font-normal'>SUBSCRIBE US NOW</h2>
                    <p className='text-lg font-thin'>Get latest news, updates and deals directly mailed to your inbox.</p>
                </div>
                <div className='flex justify-center items-center gap-0 mx-10 pt-10'>
                    <input type='text' placeholder='abc@mail.com' className='px-4 md:px-8 py-2 text-md md:text-xl' />
                    <button className='px-4 md:px-8 py-2 text-md font-thin md:text-xl text-black bg-slate-300'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
