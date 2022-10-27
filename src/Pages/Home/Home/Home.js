import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentDetails from '../../Shared/ContentDetails/ContentDetails/ContentDetails';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>All Courses: {allCourse.length}</h2>
            {
                allCourse.map(course => <ContentDetails
                    key={course.id}
                    course={course}
                ></ContentDetails>)
            }
        </div>
    );
};

export default Home;