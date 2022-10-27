import React from 'react';

const ContentDetails = ({ course }) => {
    return (
        <div>
            <h2>{course.text}</h2>
        </div>
    );
};

export default ContentDetails;