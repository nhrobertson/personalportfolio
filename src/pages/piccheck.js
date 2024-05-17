import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import piccheckimg from '../images/PicCheck.png'

class PicCheck extends Component {

    handleRedirect() {
        const externalUrl = 'https://github.com/jacksakers/PicCheck';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Pic Check</h3>
                        <p>PicCheck is an innovative Android app developed in Kotlin, designed to revolutionize task management. This evolved task manager requires users to take a picture to complete each task, adding a unique and engaging verification step.</p>
                        <p><strong>Key Featyres</strong></p>
                        <ul>
                            <li>Task Creation</li>
                            <li>Browse Completed Tasks</li>
                        </ul>
                        <p>PicCheck combines practicality with a visual twist, making task completion more interactive and satisfying.</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={piccheckimg} />
                            <Card.Body>
                                <iframe width="250px" src="https://www.youtube.com/embed/qcQQO1bUfCY?si=MlWhC6kWQt2gV4ju" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default PicCheck