import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutInfo = useLoaderData();
    return (
        <div>
            {checkoutInfo.header}

        </div>
    );
};

export default Checkout;