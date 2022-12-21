import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const ContentDetails = () => {
    const info = useLoaderData();
    console.log(info);
    return (

        <div className='my-5 shadow-lg col-12 col-lg-8 px-5 py-4'>
            <div className='d-flex justify-content-between py-2'>
                <div>
                    <h3>Name: {info.header}</h3>
                </div>
                <div className='d-flex'>
                    <div>
                        <FaDownload></FaDownload>
                    </div>
                    <div className='mx-2'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button className='bg-danger border-danger' onClick={toPdf}>Download PDF</Button>}
                        </Pdf>
                    </div>

                </div>
            </div>
            <img className='img-fluid w-100' src={info.img} alt="" />
            <h6 ref={ref} className='mt-2'> {info.text}</h6>
            <h5 className='text-primary mt-3'>Price: ${info.price}</h5>
            <p>Rating: {info.ratings}</p>
            <Link to={`/checkout/${info.id}`}><Button>Get Premium Access</Button></Link>
        </div>
    );
};

export default ContentDetails;