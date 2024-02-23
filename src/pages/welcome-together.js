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
                        <p>I am currently working on my Capstone Senior Project. Here we are tasked with forming a team and developing a unique application. We started by coming up with the idea, researching into the technologies, then creating the Proof Of Concept. We are currently in full development of the Beta release. Here is the current project description:</p>
                        <p>This website would be a place to connect with fellow students from your high school, elementary school, or even college. You all vote on a date and location for a reunion, maybe even post stuff. Perhaps even upload yearbooks.</p>
                        <p>Functions: </p>
                        <ul>
                            <li>Connect with fellow classmates (including contact information)</li>
                            <li>Post "Where are you now" about what you are up to</li>
                            <li>Vote on a date and location for a event</li>
                            <li>Upload Photos</li>
                            <li>Count down timer</li>
                            <li>Attendees List</li>
                        </ul>
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
                </Container>
            </>
        )
    }
}

export default WelcomeTogether