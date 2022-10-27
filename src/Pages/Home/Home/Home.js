import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>All Courses: {allCourse.length}</h2>

        </div>
    );
};

export default Home;