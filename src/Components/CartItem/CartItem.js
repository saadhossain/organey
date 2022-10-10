import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
const CartItem = ({ product, handleRemoveItem}) => {
    const { id, name, picture, price, quantity } = product
    return (
        <div className='w-2/4 mx-auto flex gap-2 my-4 border border-gray-500 rounded p-2'>
            <img src={picture} alt={name} className='w-20 rounded' />
            <div className='w-full flex justify-between text-left'>
                <div>
                    <h3 className='text-xl'>{name}</h3>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <h3 className='text-xl'>Unit Price: ${price}</h3>
                    <p>Total Price: ${price * quantity}</p>
                </div>
                <div onClick={()=> handleRemoveItem(id)} className='flex items-center cursor-pointer'>
                    <TrashIcon className='w-6 h-6 text-gray-600'></TrashIcon>
                    <p>Remove</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;