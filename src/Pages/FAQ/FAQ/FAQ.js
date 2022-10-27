import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <h2 className='my-3 text-center'>Frequently Asked Questions:</h2>
            <Accordion className='m-auto w-sm-100 accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>#1 What is the advantage of C++?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            One of the biggest advantages of C++ is the feature of object-oriented programming which includes concepts like classes, inheritance, polymorphism, data abstraction, and encapsulation that allow code reusability and makes a program even more reliable.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>#2 What can I do with Python?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>#3 Should I learn JavaScript after HTML and CSS?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            Ideally you'll learn HTML first, then CSS, and then finish with JavaScript, as they build on each other in that order. If you want to create websites or web applications, you need to learn HTML and CSS. HTML is used to create the structure and layout of web pages, while CSS is used to style the content of web pages.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>#4 Why should I learn JavaScript?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            JavaScript supports valuable skills such as object-oriented, functional, and imperative styles of programming. Beginner developers, in turn, can apply these skills to any new language they want to learn, like Python, Java, or C++.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4>#5 Why React is very popular?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            React Builds Robust & Intuitive User Interfaces.
                            It allows developers to declaratively describe user interfaces, taking a lot of the heavy lifting out of the coding process while making the code more simple to read and understand.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4>#6 Why should I know about databases?</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            Databases support good data access because: Large volumes of data can be stored in one place. Multiple users can read and modify the data at the same time. Databases are searchable and sortable, so the data you need can be found quick and easily.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;