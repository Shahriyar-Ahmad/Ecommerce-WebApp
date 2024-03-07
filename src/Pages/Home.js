import React from 'react'

// component imports
import Banner from '../Components/Banner'
import Features from '../Components/Features'
import Reviews from '../Components/Reviews'
import BlogPosts from '../Components/BlogPosts'
import Subscribe from '../Components/Subscribe'
import ProductsBox from '../Components/ProductsBox'

// component data imports
import { WatchProductsData } from '../Assets/WatchProducts/WatchProductsData'
import { MobileProductsData } from '../Assets/MobileProducts/MobileProductsData'
import { MacbookProductsData } from '../Assets/MacbookProducts/MacbookProductsData'

import { coustmerReviews } from '../Assets/Reviews/CoustmerReviews'
import { BlogPostData } from '../Assets/BlogPost/BlogPost'

// home img imports
import iPhone15ProMax from '../Assets/iphone15promax.png';
import AppleWatch from '../Assets/applewatc.png';


const Home = () => {
  return (
    <>
      <Banner text1="YOUR" text2="PRODUCTS ARE" text3="GREAT" btnText="SHOPE PRODUCT" imgSrc={AppleWatch} />
      <Features />
      <ProductsBox productsName="MOBILE PRODUCTS" products={MobileProductsData} />
      <ProductsBox productsName="SMART WATCHS" products={WatchProductsData} />
      <Banner text1="10% off" text2="NEW YEAR" text3="SALE" btnText="SHOPE SALE" imgSrc={iPhone15ProMax} />
      <ProductsBox productsName="APPLE MACBOOK" products={MacbookProductsData} />
      <BlogPosts posts={BlogPostData} />
      <Reviews coustmerReviews={coustmerReviews} />
      <Subscribe />
    </>
  )
}

export default Home
