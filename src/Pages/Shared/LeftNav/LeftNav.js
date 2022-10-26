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
        <div>
            <div>
                {
                    categories.map(category => <h5 key={category.id}>
                        <Link to={`/category/:${category.id}`}>{category.name}</Link>
                    </h5>)
                }
            </div>
        </div>
    );
};

export default LeftNav;