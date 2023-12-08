import React from 'react'
import { Product } from './Product'
import { Products } from '../../products'

export const Shop = () => {
    return (
        <div className='Shop'>
            <div className='flex'>
                <h1 className='text-6xl font-bold mx-auto'>Shop IT</h1>
            </div>
            <div className='Products'>
                {Products.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}

