import React from 'react';
const Footer = () => {
    return (
        <div className='flex gap-10 justify-center text-left my-5 bg-[#D3EAF2] py-10'>
            <div className='px-2 border-r border-[#4D8052]'>
                <h4 className="text-2xl uppercase my-4">Contact Us</h4>
                <p>
                    9066 Green Lake Drive Chevy Chase, MD 20815
                </p>
                <span className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <p>sales@organey.com</p>
                </span>
                <span className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <p>(1800)-88-66-991</p>
                </span>
            </div>
            <div className='px-2 border-r border-[#4D8052]'>
                <h4 className='text-2xl uppercase my-4'>Information</h4>
                <ul>
                    <li>Fruits & Vegetables</li>
                    <li>Dairy Products</li>
                    <li>Package Foods</li>
                    <li>Beverages</li>
                    <li>Health & Wellness</li>
                </ul>
            </div>
            <div className='px-2 border-r border-[#4D8052]'>
                <h4 className='text-2xl uppercase my-4'>My Account</h4>
                <ul>
                    <li>My Account</li>
                    <li>Payment Method</li>
                    <li>Order Summery</li>
                    <li>Update Profile</li>
                    <li>Wishlist</li>
                </ul>
            </div>
            <div className='px-2'>
                <h4 className='text-2xl uppercase my-4'>Our Company</h4>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Returns & Refunds</li>
                    <li>Delivery System</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;