import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const { product_image, our_price, price, product_name, id } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return (
        <>
            <div className="products">
                <div className='block md:flex border rounded-xl m-1 mt-3'>
                    <img src={product_image} className='w-[300px] md:w-[400px] h-auto border-2 mx-auto mt-5 rounded-xl md:m-3' alt="" />
                    <div className='flex flex-col px-5 md:px-0 mt-10'>
                        <p className='text-3xl md:text-5xl font-bold border-t md:border-none'>{product_name}</p>
                        <p className='text-lg lg:text-2xl mt-2 md:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum fugit vitae aliquam. Quae, necessitatibus. Consequatur autem cumque blanditiis corrupti, voluptatum odit non laboriosam eveniet esse debitis, molestias perferendis temporibus!</p>
                        <div className='flex px-5 mt-3 md:mt-auto mb-2 md:mb-10 border rounded-lg w-3/4 mx-auto md:mx-0 md:w-full lg:w-3/4 xl:w-1/2 justify-between'>
                            <div className='flex flex-col my-auto'>
                                <p className='text-lg md:text-2xl font-bold'>₹{our_price}.</p>
                                <p className='text-md md:text-xl'><s className='font-thin'>₹{price}.</s></p>
                            </div>
                            <button onClick={() => addToCart(id)} className='bg-blue-500 text-white font-bold md:text-lg border  hover:border-blue-500 hover:bg-green-500 border-black rounded-md md:rounded-xl py-1 md:py-0 px-1 md:px-3 ml-10 h-3/4 my-auto'>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};
