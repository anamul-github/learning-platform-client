import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const ContentDetails = () => {
    const info = useLoaderData();
    console.log(info);
    return (

        <div className='my-5 shadow-lg w-75 px-5 py-4'>
            <h3>Name: {info.header}</h3>
            <img className='img-fluid w-100' src={info.img} alt="" />
            <h6 className='mt-2'> {info.text}</h6>
            <h5 className='text-primary mt-3'>Price: ${info.price}</h5>
            <p>Rating: {info.ratings}</p>
            <Link to={`/checkout/${info.id}`}><Button>Get Premium Access</Button></Link>
        </div>
    );
};

export default ContentDetails;