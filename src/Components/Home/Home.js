import banner from './assests/home-banner.png'
import './Home.css'
const Home = () => {
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
        </div>
    );
};

export default Home;