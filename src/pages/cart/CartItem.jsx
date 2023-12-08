import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'


export const CartItem = (props) => {
    const { product_image, our_price, price, product_name, id } = props.data;
    const { cartItems, addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext)

    return (
        <div className='CartItem'>
            <div className='flex'>
                <div className='border rounded-xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-2'>
                    <img src={product_image} className='w-[200px] md:w-[300px] m-5 border-2 rounded-xl h-auto px-2' alt="" />
                    <div className='sm:m-5 flex flex-col'>
                        <p className='text-2xl md:text-5xl sm:mt-3 md:mt-10 font-bold mx-auto sm:mx-0'>{product_name}</p>
                        <p className='text-xl md:text-4xl sm:mt-5 md:mt-10 mx-auto sm:mx-0'>₹{our_price}</p>
                        <div className='CountHandle w-1/3 my-3 sm:mt-5 md:mt-10 mx-auto sm:mx-0'>
                            <button className='border border-black bg-gray-200 font-bold text-center w-1/3' onClick={()=>removeFromCart(id)}> - </button>
                            <input className='border border-black text-center w-1/3' value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
                            <button className='border border-black bg-gray-200 font-bold text-center w-1/3' onClick={()=>addToCart(id)}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
