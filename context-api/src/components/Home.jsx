import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(20)

const Home = () => {
  
   

    const productsArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        avatar: faker.image.avatar(),
    }));
    const [products] = useState(productsArray);




    return (
        <div className='flex justify-center items-center px-6 pr-10 py-6'>
            <div className=' grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10'>
                {products.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} />

                ))}
            </div>
        </div>
    )
}

export default Home