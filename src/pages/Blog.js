import React, { Component } from 'react';
import { Media, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="9">
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXXETZNTyJPqECtSGKC3TaA1GVnBF4iy4TPA&usqp=CAU"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXXETZNTyJPqECtSGKC3TaA1GVnBF4iy4TPA&usqp=CAU"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXXETZNTyJPqECtSGKC3TaA1GVnBF4iy4TPA&usqp=CAU"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXXETZNTyJPqECtSGKC3TaA1GVnBF4iy4TPA&usqp=CAU"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md="3">
                            <h5 className="text-center mt-5">Categories</h5>
                            <Card>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </Card>

                            <Card>
                                <Card.Body className="mt-3" bg="light" >
                                    <Card.Title>Site widget</Card.Title>
                                    <Card.Text>
                                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                   
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
