import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const ContentDetails = () => {
    const info = useLoaderData();
    console.log(info);
    return (

        <div>
            <p>{info.header}</p>
            <Link to={`/checkout/${info.id}`}><Button>Get Premium Access</Button></Link>
        </div>
    );
};

export default ContentDetails;