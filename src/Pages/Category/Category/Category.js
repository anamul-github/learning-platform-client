import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648" />
                        <Card.Body>
                            <Card.Title>C++</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='h-50' variant="top" src="https://stackify.com/wp-content/uploads/2018/09/Learn-Python-1.jpg" />
                        <Card.Body>
                            <Card.Title>Python</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://velog.velcdn.com/images/gaeon/post/cc8d4303-bc84-4788-9cb2-b3d2f53f4c3e/image.jpg" />
                        <Card.Body>
                            <Card.Title>HTML & CSS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://itchief.ru/assets/images/covers/javascript-statements.png" />
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://miro.medium.com/max/750/0*rwqI3XKmDZgsVuxr.jpg" />
                        <Card.Body>
                            <Card.Title>Database</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Category;