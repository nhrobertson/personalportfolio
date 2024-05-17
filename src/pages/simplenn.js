import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import simplennimg from '../images/simplennimg.png'
import logo from '../logo.png'

class SimpleNN extends Component {

    handleRedirect() {
        const externalUrl = 'https://github.com/nhrobertson/GoDigitRecSimpleNN';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Simple Neural Network for Digit Recognition using Go</h3>
                        <p>This project involves implementing a simple neural network for recognizing digits using the MNIST dataset. Inspired by Michael Nielsen's work on neural networks and deep learning, this project aims to replicate his neural network using the Go programming language.</p>
                        <p><strong>Project Details:</strong></p>
                        <ul>
                            <li>Language and Tools:
                            <ul>
                                <li>Developed in Go</li>
                                <li>Utilizes GoNum for linear algebra operations</li>
                                <li>Accesses the MNIST dataset using the moverest/mnist package</li>
                            </ul>
                            </li>
                            <li>Network Structure:
                                <ul>
                                    <li>Consists of an input layer, one or more hidden layers, and an output layer.</li>
                                    <li>Utilizes Sigmoid Activation Functions</li>
                                    <li>Implements stochastic gradient descent</li>
                                </ul>
                            </li>
                        </ul>
                        <p>The link to the GitHub will allow you to access the repo and has instructions to how to use.</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={simplennimg} />
                            <Card.Body>
                                <Card.Title>GitHub Link</Card.Title>
                                <Button variant="primary" onClick={this.handleRedirect}>Go</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        </Col>
                    </Row>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("ai")}>Back</Button>
                </Container>
            </>
        )
    }
}

export default SimpleNN