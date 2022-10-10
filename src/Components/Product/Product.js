import React from 'react';

const Product = ({product, handleAddToCart}) => {
    const {picture, name, price, category} = product;
    return (
        <div className='bg-[#E5EDBE] rounded'>
            <img src={picture} alt={name} className='bg-white w-full rounded-t'/>
            <div className='py-4'>
            <h3 className='text-2xl'>{name}</h3>
            <h4>Category: {category}</h4>
            <h3 className='text-xl'>Price : $<span className='text-bold'>{price}</span></h3>
            <button onClick={()=> handleAddToCart(product)} className='text-semibold bg-[#F79817] hover:bg-[#FE9200] text-white py-2 px-3 my-4 rounded'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;