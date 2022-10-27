import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion className='m-auto accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>#1 What is cors?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h4>
                            Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                        </h4>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>#2 Why are you using firebase? What other options do you have to implement authentication?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h4>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            <br /> <br />
                            <span>5 Common Authentication Types:</span> <br />
                            1. Password-based authentication. <br />
                            2. Multi-factor authentication. <br />
                            3. Certificate-based authentication. <br />
                            4. Biometric authentication. <br />
                            5. Token-based authentication.
                        </h4>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>#3 How does the private route work?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h4>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </h4>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>#4 What is Node? How does Node work?</h3></Accordion.Header>
                    <Accordion.Body>
                        <h4>
                            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                            <br /> <br />
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                        </h4>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;