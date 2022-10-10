import React from 'react';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div className='container w-10/12 mx-auto'>
            <Header></Header>
            <div className='flex flex-col justify-center h-[85vh]'>
                <h1 className='text-8xl font-bold text-amber-600'>404</h1>
                <h3 className='text-5xl font-semibold'>NOT FOUND!!</h3>
            </div>
        </div>
    );
};

export default ErrorPage;