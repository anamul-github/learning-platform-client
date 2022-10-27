import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutInfo = useLoaderData();
    return (
        <div className='my-5 shadow-lg w-75 px-5 py-5 text-center'>
            <h2 className='mt-5 pt-5 text-success'>Congratulations! You got premium access to</h2>
            <h2 className='text-primary mb-5 pb-5 fw-bolder mt-3'>{checkoutInfo.header}</h2>
        </div>
    );
};

export default Checkout;