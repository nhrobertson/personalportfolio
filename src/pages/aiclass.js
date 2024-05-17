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

class AIClass extends Component {

    handleRedirect() {
        const externalUrl = 'https://github.com/Noahr8/aiclasshw/tree/main';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Artifical Intelligence Class</h3>
                        <p>During my final semester as an undergrad, I participated in the University of South Carolina's AI Institute class for Artifical Intellegence and studied under Dr. Forest Agostinelli. Here we learned the theory and applications for several forms of AI.</p>
                        <p><strong>Material Studied</strong></p>
                        <ul>
                            <li>Pathfinding
                            </li>
                            <li>Advesarial Search
                            </li>
                            <li>Logic Progamming with Prolog</li>
                            <li>Machine Learning</li>
                        </ul>
                        <p>In the Card, you can find a link to my GitHub repo that contains my implementation of the material studied in this order:</p>
                        <ul>
                            <li>Coding HW 1 - Pathfining Algorithms</li>
                            <li>Coding HW 2 - Minimax</li>
                            <li>Coding HW 3 - N Puzzle solved with Prolog</li>
                            <li>Coding HW 4 - Implementation of: A Neural Network for MNIST Digits, Policy Iteration, and SARSA</li>
                        </ul>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={simplennimg} />
                            <Card.Body>
                                <Card.Title>GitHub Link</Card.Title>
                                <Card.Text>GitHub link to my repo for the AI class.</Card.Text>
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

export default AIClass