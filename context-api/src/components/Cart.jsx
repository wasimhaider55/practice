import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useContext } from 'react';
import { Cartt } from './Context';

const Cart = () => {
  const { cart } = useContext(Cartt);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total price of items in the cart
    const totalPrice = cart.reduce((prev, curr) => prev + Number(curr.price), 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>

      <div className="flex justify-between mb-8">
        <div className="text-xl font-semibold">Products in Cart</div>
        <div className="text-xl font-semibold">Total: RS, {total}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
