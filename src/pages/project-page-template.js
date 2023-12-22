import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

class ProjectPageTemplate extends Component {

    handleRedirect() {
        console.log("Redirect now!");
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Project Template</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Temp</Card.Title>
                                <Card.Text>
                                    Temp
                                </Card.Text>
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

export default ProjectPageTemplate