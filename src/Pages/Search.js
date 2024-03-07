import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { AllProductsData } from '../Assets/ProductData/AllProductsData';

const Search = () => {
    const [searchQuerry, setSearchQuerry] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const filterBySearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        if (inputValue === '') {
            setSearchResult([])
        }
        else {
            const searchBrand = AllProductsData.filter(product => product.productName.toLowerCase().includes(inputValue));
            setSearchResult(searchBrand);
        }
        setSearchQuerry(inputValue);
    }
    return (
        <div className='py-10 px-16 mb-2 w-full justify-center items-center'>
            <div className=' p-5 justify-center items-center md:w-[50%] m-auto'>
                <input className='px-2 py-1 border-gray-400 border-2 outline-gray-500 outline-2 w-[60%] justify-center items-center rounded-md'
                    onChange={filterBySearch}
                    placeholder='Serach by Company name or Category'
                />
                <button className='py-2 px-4 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer bg-gray-500'>
                    Search
                </button>
            </div>
            <h1 className='font-bold text-2xl text-left'>Search Result for "{searchQuerry}"</h1>
            <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
                {
                    searchResult.map((product, i) => (
                        <ProductCard
                            key={i}
                            ID={product.id}
                            productName={product.productName}
                            imageSrc={product.imageSrc}
                            productPrice={product.price}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Search;