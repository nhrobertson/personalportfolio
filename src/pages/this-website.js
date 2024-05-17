import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import logo from '../logo.png'

class ThisWebsite extends Component {

    handleRedirect() {
        const externalUrl = 'http://nhrobertson.com';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>nhrobertson.com</h3>
                        <p>Welcome to my personal portfolio website, developed using React. Here, you'll find detailed showcases of my personal projects, including my capstone project "Welcome Together," research on artificial neural networks, and various software development endeavors. This platform highlights my technical skills, creativity, and dedication to building impactful applications. Explore my work, learn about my journey, and connect with me for potential collaborations.</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Portfolio</Card.Title>
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

export default ThisWebsite