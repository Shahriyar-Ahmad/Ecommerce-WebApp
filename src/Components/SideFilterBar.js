import React from 'react';

// icons imports
import { GrNext, GrPrevious } from 'react-icons/gr';

const SideFilterBar = ({
  showSideBar,
  handleToggleSideBar,
  handleRangeChange,
  handleFilterChange,
  handleFilterClear,
  rangeValue,
  selectedFilters,
  maxPrice,
  minPrice
}) => {
  const Category = ["iPhone", "Watches", "Macbook"];

  return (
    <>
      <button onClick={handleToggleSideBar} className='absolute top-32 left-5 z-0 rounded-md p-2 bg-black text-white text-xl'><GrNext /></button>
      <div style={{
        transform: `translateX(${showSideBar ? '0' : '-1000px'})`,
        zIndex: 100,
        transition: '0.5s ease-in-out',
      }} className='absolute top-24 left-0 md:flex flex-col px-10 py-5 max-w-[200px] md:max-w-[300px] h-[100vh] bg-white'>
        <button onClick={handleToggleSideBar} className='rounded-md w-9 p-2 bg-black text-white text-lg'><GrPrevious /></button>
        <div className='flex font-sans font-semibold items-center text-xl md:text-2xl mt-4'>
          <p>Filter By Category</p>
        </div>
        <div className='mt-5 text-sm md:text-lg'>
          {
            Category.map((cat, i) => (
              <div className='my-1' key={i}>
                <input
                  onChange={() => handleFilterChange(cat)}
                  type="checkbox"
                  name={cat}
                  checked={selectedFilters.includes(cat)}
                  className='cursor-pointer w-6 h-4 mr-2 checked:bg-gray-700'
                />
                <label htmlFor={cat}>{cat}</label>
              </div>
            ))
          }
        </div>
        <div className='my-2'>
          <h3 className='font-semibold text-xl md:text-2xl'>Price Range</h3>
          <div className="my-4 flex items-center justify-center">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={rangeValue}
              onChange={handleRangeChange}
              className="w-[90%] bg-slate-200 rounded h-2"
            />
            <span className="ml-4 text-sm md:text-lg font-bold">{rangeValue}</span>
          </div>
        </div>
        <button className='px-4 py-2 mt-6 font-thin rounded-md text-sm md:text-lg text-white bg-black hover:cursor-pointer' onClick={handleFilterClear}>Clear Filters</button>
      </div>
    </>
  );
};

export default SideFilterBar;
