import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
    const [cardCategory, setCardCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCardCategory(data))
    }, [])

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 my-5">
                {
                    cardCategory.map(category => <Card className='m-3' key={category.id}>
                        <Card.Img variant="top" src={category.img} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.text}
                            </Card.Text>
                            <Button variant="primary">Content Details</Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Category;