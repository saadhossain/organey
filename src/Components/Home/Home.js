import { useContext } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext, ProductContext } from '../../Layout/Main';
import { addToDb } from '../../Utility/fakedb';
import Product from '../Product/Product';
import banner from './assests/home-banner.png'
import './Home.css'
const Home = () => {
    const products = useContext(ProductContext);
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
        addToDb(product.id)
        toast.success('Product Added to Cart', {autoClose:500})
    }
    return (
        <div>
            <div className='w-full'>
            <img src={banner} alt='Men with Fresh Vegetables' className='w-full'/>
            <div className='flex gap-10 my-5 justify-center'>
                <div className='fruits-vegetable text-black'>
                    <h4 className='text-2xl'>Fruits & Vegetables</h4>
                    <ul>
                        <li>Nuts & SeedsFruits</li>
                        <li>Oil</li>
                        <li>Fruits</li>
                        <li>Tomatos</li>
                        <li>Vegetables</li>
                    </ul>
                </div>
                <div className='dairy-product text-black'>
                    <h4 className='text-2xl'>Dairy Products</h4>
                    <ul>
                        <li>Milks</li>
                        <li>Ghee</li>
                        <li>Ice Cream</li>
                        <li>Yougurt</li>
                        <li>Cheese</li>
                    </ul>
                </div>
                <div className='snacks text-black'>
                    <h4 className='text-2xl'>Snacks</h4>
                    <ul>
                        <li>Potato Chips</li>
                        <li>Salted Peanut</li>
                        <li>Chanachur</li>
                        <li>Popcorn</li>
                        <li>Noodles</li>
                    </ul>
                </div>
                <div className='drinks text-black'>
                    <h4 className='text-2xl'>Cold Drinks</h4>
                    <ul>
                        <li>Coffee</li>
                        <li>Lemonade</li>
                        <li>Coca Cola</li>
                        <li>Milkshake</li>
                        <li>Lemon Juice</li>
                    </ul>
                </div>
            </div>       
            </div>
            <h1 className='text-5xl font-bold py-5 text-[#FE9200]'>Latest Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Home;