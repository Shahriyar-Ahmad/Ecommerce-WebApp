import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductsBox = ({ productsName, products }) => {
    return (
        <div className='flex flex-col items-center justify-between md:px-24 my-10'>
            <div className='w-full flex items-center justify-evenly md:justify-between '>
                <h2 className='text-xl md:text-4xl text-left '>
                    {productsName}
                </h2>
                <Link to={'/Shop'}><button className='font-thin text-sm md:text-lg text-black underline text-right'>
                    SHOP PRODUCT
                </button>
                </Link>
            </div>
            <div className='w-full'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-5 gap-2 min-[100px]:px-5 place-items-center w-full"      >
                    {products.slice(0, 4).map((product, index) => (
                        <ProductCard
                            key={index}
                            ID={product.id}
                            productName={product.productName}
                            imageSrc={product.imageSrc}
                            productPrice={product.price}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductsBox
