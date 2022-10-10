import React, { useContext } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext, ProductContext } from '../../Layout/Main';
import { addToDb } from '../../Utility/fakedb';
import Product from '../Product/Product';

const Shop = () => {
    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext);
    const handleAddToCart =(product) =>{
        let newCart = [];
        const exists = cart.find(existingProduct => existingProduct.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const restproduct = cart.filter(existingProduct=> existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...restproduct, exists]
        }
        setCart(newCart)
        addToDb(product.id);
        toast.success('Product Added to Cart', {autoClose:500})
    }
    return (
        <div>
            <h1 className='text-5xl font-bold py-5 text-[#FE9200]'>Latest Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Shop;