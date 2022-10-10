import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './organey-logo.png';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { CartContext } from '../../Layout/Main';
const Header = () => {
    const [expand, setExpand] = useState(false);
    const [cart]= useContext(CartContext)
    return (
        <div className='container w-10/12 mx-auto flex justify-between items-center py-2'>
            <div>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt='Organey Logo' />
                    <h1 className='text-3xl font-semibold'>Organey</h1>
                </Link>
            </div>
            <div className='flex gap-4'>
                <ul className={`md:flex gap-4 font-semibold absolute md:static duration-500 ${expand ? 'top-12' : 'top-[-200px]'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/cart'>Cart<sup className='text-red-600 font-bold'>{cart.length}</sup></Link></li>
                </ul>
                <div onClick={()=> setExpand(!expand)} className='h-6 w-6 text-gray-700 md:hidden'>
                    {
                        expand ? <XMarkIcon></XMarkIcon>:<Bars3Icon></Bars3Icon>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;