import React from 'react';
import { useContext } from 'react';
import { Cartt } from './Context';

const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(Cartt)
    return (
        <div className='w-80 h-96 bg-white border rounded-lg shadow-md overflow-hidden hover:cursor-pointer'>
            <div >
                <img src={prod.avatar} alt={prod.name} className='w-full h-60 object-cover' />
            </div>
            <div className=' pl-5'>
                <p>{prod.name}</p>
                <p>{prod.id}</p>
                <h1>{prod.price}</h1>
            </div>
            <div className='flex justify-center text-white font-bold'>
                {cart.includes(prod) ? (<button
                    onClick={() => {
                        setCart(cart.filter((c) => c.id !== prod.id))
                    }}
                    className=' bg-blue-600 p-2 border rounded-full items-center text-center'>
                    remove from cart
                </button>) : (<button
                    onClick={() => {
                        setCart([...cart, prod])
                    }}
                    className=' bg-blue-600 p-2 border rounded-full items-center text-center'>
                    add to cart
                </button>)}
            </div>
        </div>
    )
}

export default SingleProduct