import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (

        <div className='my-5'>
            <h2 className='mb-3'>Available Courses:</h2>
            {
                categories.map(category => <h5 className='py-2' key={category.category_id}>
                    <Link to={`/contentDetails/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </h5>)
                // {`/category/:${category.id}`}
            }
        </div>

    );
};

export default LeftNav;