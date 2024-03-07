import React, { useState } from 'react';
import { useParams } from 'react-router';
import { AllProductsData } from '../Assets/ProductData/AllProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { addproducttocart } from '../features/addtocartSlice/addtocartSlice';
import { addtowishlist } from '../features/wishlistSlice/wishlistSlice';
import ProductCard from '../Components/ProductCard';
import { toast } from 'react-toastify';

const ProductPage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const CartProduct = useSelector((state) => state.addtocart);
  const WishListProduct = useSelector((state) => state.wishlist);
  const currentProductfind = AllProductsData.find((product) => product.id === +param.id);

  const otherSimilarProducts = AllProductsData.filter((product) => product.category === currentProductfind.category && product.id !== +param.id);

  // State to track quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity increase
  const increaseQuantity = () => {
    if (quantity < currentProductfind.inStock) {
      setQuantity(quantity + 1);
    }
    else if (quantity === currentProductfind.inStock) {
      toast.error(`Sorry! You cannot add more quantity of product. Because inStock only ${currentProductfind.inStock} avaiable.`,{autoClose: 1200})
    }
    else {
      setQuantity(quantity);
    }
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Function to handle add to cart
  const addToCart = (product) => {

    const isProductInCart = CartProduct.find(products => products.id === product.id)

    if (isProductInCart) {
      toast.error("You have already add this producet to cart...",{autoClose: 1200})
    } else {
      dispatch(addproducttocart(
        {
          id: product.id,
          quantity: quantity,
          imageSrc: product.imageSrc,
          productName: product.productName,
          price: product.price,
          category: product.category,
          inStock: product.inStock,
        }
      ))
    }
  };

  // Function to handle add to wishlist
  const addToWishList = (product) => {
    const ExistinWishList = WishListProduct.find((products) => products.id === product.id);
    if (ExistinWishList) {
      toast.error("You have already add this producet to wishlist...",{autoClose: 1200})
    } else {
      dispatch(addtowishlist({
        id: product.id,
        imageSrc: product.imageSrc,
        productName: product.productName,
      }))
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex min-[100px]:flex-col md:flex-row md:mx-20 justify-center items-center my-5" >
        <img src={currentProductfind.imageSrc} alt="Product" className="w-64 h-64 object-cover rounded-md border-2" />
        <div className="ml-8 min-[100px]:justify-center md:justify-start">
          <h2 className="text-2xl font-bold">{currentProductfind.productName}</h2>
          <p className="text-gray-600">{currentProductfind.description}</p>
          <p className="text-lg font-semibold mt-4">{currentProductfind.price}$</p>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <button onClick={decreaseQuantity} className="bg-gray-300 px-2 py-1 rounded">
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={increaseQuantity} className="bg-gray-300 px-2 py-1 rounded">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button onClick={() => addToCart(currentProductfind)} className="mr-4 bg-black text-white px-4 py-2 rounded">
              Add to Cart
            </button>
            <button onClick={() => addToWishList(currentProductfind)} className="mr-4 bg-black text-white px-4 py-2 rounded">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>


      {/* Similar Products Section */}
      <div className="my-12 md:px-20 justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-5 gap-2 min-[100px]:px-5 place-items-center">
          {/* Product Cards (Similar Products) */}
          {otherSimilarProducts.slice(0, 4).map((product, i) => (
            <ProductCard
              key={i}
              imageSrc={product.imageSrc}
              productName={product.productName}
              productPrice={product.price}
              ID={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
