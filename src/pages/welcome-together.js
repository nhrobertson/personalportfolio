import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import wtlogo from '../images/wtlogo.png'

class WelcomeTogether extends Component {

    handleRedirect() {
        const externalUrl = 'https://welcome-together.web.app/';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Welcome Together</h3>
                        <p>Welcome Together is an innovative event planning web application developed as a part of our Capstone Senior Project. Our team of five utilized React and Firebase to create a versatile platform designed to simplify event management and foster connections among users.</p>
                        <p>Key Features:</p>
                        <ul>
                            <li>Event Creation and Customization</li>
                            <li>Interactive Polls</li>
                            <li>Real-Time Chatroom</li>
                            <li>Photo Sharing</li>
                            <li>Countdown Timer</li>
                        </ul>
                        <p><strong>Development Journey:</strong></p>
                        <p>The development process began with ideation and thorough research into the most suitable technologies. We created a Proof of Concept before progressing to the full development of the Beta version. After rigorous testing and refinement, Welcome Together reached its v1.0 release, marking a significant milestone in our project.</p>
                        
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={wtlogo} />
                            <Card.Body>
                                <Card.Title>Welcome Together</Card.Title>
                                <Button variant="primary" onClick={this.handleRedirect}>Go</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        </Col>
                    </Row>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("detailed_projects")}>Back</Button>
                </Container>
            </>
        )
    }
}

export default WelcomeTogether