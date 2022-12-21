import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';


const Category = () => {

    const [cardCategory, setCardCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://learning-hour-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCardCategory(data)
                setLoading(false)
            }
            )
    }, [setLoading]);

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center vh-100'><Loader></Loader></div>;
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 my-5">
                {
                    cardCategory.map(category => <Card className='m-3' key={category.category_id}>
                        <Card.Img variant="top" src={category.img} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.text}
                            </Card.Text>
                            <Link to={`/contentDetails/${category.id}`}>
                                <Button variant="primary">Content Details</Button>
                            </Link>

                        </Card.Body>
                    </Card>)
                }
            </div>
        </div >
    );
};

export default Category;