import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <div>
                    <Header></Header>
                    <Outlet className='container w-10/12 mx-auto'></Outlet>
                    <Footer></Footer>
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;