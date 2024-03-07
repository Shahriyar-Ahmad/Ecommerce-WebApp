// ProductListingPage.js
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import SideFilterBar from '../Components/SideFilterBar';
import Pagination from '../Components/Pagination';
import { AllProductsData } from '../Assets/ProductData/AllProductsData';
import { toast } from 'react-toastify';

const ProductListingPage = () => {
  const maxPrice = Math.max(...AllProductsData.map(product => product.price));
  const minPrice = Math.min(...AllProductsData.map(product => product.price));
  const [rangeValue, setRangeValue] = useState(maxPrice);
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOption, setSortOption] = useState('default');

  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value, 10));
  };

  const handleToggleSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
  };

  const handleFilterChange = (category) => {
     if(selectedFilters.includes(category)){
      setSelectedFilters(selectedFilters.filter((filter) => filter !== category));
     }
     else{
      setSelectedFilters([...selectedFilters, category])
     }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleFilterClear = () => {
    setSortOption('default');
    setRangeValue(maxPrice)
    setSelectedFilters([]);
    toast.success('All Filters Successfully Clear!', {autoClose : 1500,})
  };

  // Pagination Logics
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastIndex = itemsPerPage * currentPage;
  const firstIndex = lastIndex - itemsPerPage;


  const paginate = (index) => {
    setCurrentPage(index + 1);
  };

  const moveToPrev = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const moveToNext = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  // Apply sorting, filtering, and price range logic
  const sortedAndFilteredProducts = AllProductsData
    .filter(product => selectedFilters.length === 0 || selectedFilters.includes(product.category))
    .filter(product => product.price <= rangeValue)
    .filter((product) => {
      switch (sortOption) {
        case 'rating-4':
          return product.rating >= 4;
        case 'rating-4.5':
          return product.rating >= 4.5;
        default:
          return product.rating >= 0; // No sorting
      }
    });

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / itemsPerPage);
  const currentPageProduct = sortedAndFilteredProducts.slice(firstIndex, lastIndex);

  return (
    <div className='flex flex-col justify-center mx-auto mt-5 md:px-20'>
      <SideFilterBar
        showSideBar={showSideBar}
        handleToggleSideBar={handleToggleSideBar}
        handleRangeChange={handleRangeChange}
        handleFilterChange={handleFilterChange}
        rangeValue={rangeValue}
        selectedFilters={selectedFilters}
        handleFilterClear={handleFilterClear}
        maxPrice={maxPrice}
        minPrice={minPrice}
      />
      <div className="container min-[100px]:max-w-[100%] md:max-w-full justify-center mx-auto">
        <div className="flex min-[100px]:flex-col min-[100px]:my-4 md:flex-row justify-between items-center px-10 py-2 gap-2 font-semibold text-lg md:text-xl">
          <p>{sortedAndFilteredProducts.length} Products Are Available</p>
          <div className="flex justify-center items-center bg-slate-200 rounded-md p-1 md:p-2">
            <label className='text-sm md:text-xl'>Filter By Rating:</label>
            <select onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className="w-32 p-1 m-1 rounded-md text-[15px] bg-slate-200">
              <option value="rating-1">Default</option>
              <option value="rating-4">Rating 4+</option>
              <option value="rating-4.5">Rating 4.5+</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center place-content-center justify-center mx-auto py-5 gap-2">
          {currentPageProduct.map((product, i) => (
            <ProductCard
              key={i}
              imageSrc={product.imageSrc}
              productName={product.productName}
              productPrice={product.price}
              ID={product.id}
            />
          ))}
        </div>
        <Pagination
          moveToPrev={moveToPrev}
          totalPages={totalPages}
          paginate={paginate}
          moveToNext={moveToNext}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
