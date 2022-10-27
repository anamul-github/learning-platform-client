import React from 'react';

const Course = ({ course }) => {
    const { img, header } = course;
    // const [course, setCourse] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/course/${course.id}`)
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])

    return (
        <div>
            <h2>{img}</h2>
            <h2>{header}</h2>
        </div>
    );
};

export default Course;