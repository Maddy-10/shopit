import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Products } from '../../products'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'
import { BsCartXFill } from "react-icons/bs";

export const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const TotalAmount = getTotalCartAmount()
  return (
    <div className=''>
      <div className='flex'>
        <h1 className='text-3xl mx-auto mt-2'>Your Cart Items</h1>
      </div>
      <div className='cartItems mt-2'>
        {
          Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })
        }
      </div>
      {TotalAmount > 0 ? (
        <div className='Checkout flex flex-col  p-2 mt-2 bg-white rounded-lg'>
          <p className='text-2xl text-center mt-3'>Subtotal: ₹{TotalAmount}</p>
          <div className='flex justify-center mt-5'>
            <button onClick={() => navigate("/")} className='border-2 hover:border-black mx-2 px-5 rounded-lg py-2 text-xl font-bold bg-black text-white hover:bg-white hover:text-black'>Continue Shopping</button>
            <button className='border-2 hover:border-black mx-2 px-5 rounded-lg py-2 text-xl font-bold bg-black text-white hover:bg-white hover:text-black'>Buy Now</button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col h-[600px]  border'>
          <div className='my-auto flex flex-col'>
            <BsCartXFill className='text-6xl md:text-7xl mx-auto' />
            <h1 className='text-3xl md:text-4xl text-center mt-3'>Oops!! Your Cart is Empty</h1>
            <button onClick={() => navigate("/")} className='mt-5 border-2 hover:border-black mx-auto px-5 rounded-lg py-2 text-xl font-bold bg-black hover:bg-white hover:text-black text-white'>Continue Shopping</button>
          </div>
        </div>
      )}

    </div>
  )
}
