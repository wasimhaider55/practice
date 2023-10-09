import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Cartt } from './Context';

const Header = () => {
   const {cart} = useContext(Cartt)
    return (
        <div>
            <h1 className=' text-center text-5xl mb-2'>
                React context api
            </h1>
            <ul className=' flex justify-between  items-center bg-blue-400 px-10 text-3xl p-2'>
                <Link to="/">
                    <li className=' p-1 border rounded-full'>
                        Home
                    </li>
                </Link>

                <Link to="/Cart">
                    <li className=' p-1 border rounded-full'>
                        cart
                        ({cart.length})
                    </li>
                </Link> 
                
            </ul>
        </div>
    )
}

export default Header