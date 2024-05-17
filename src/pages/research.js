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

class Research extends Component {

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
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Research</h3>
                        <p>In the summer of 2023, I participated in the McNair Junior Fellows research program at the University of South Carolina, under the mentorship of Dr. Rasha Karakchi. My research journey began with an exploration into the fundamentals of Finite State Machines, providing a solid foundation in state-based computational models.</p>
                        <p>As the program progressed, I shifted my focus to Neural Networks, delving into their structure, functionality, and implementation. Through hands-on projects and rigorous study, I gained a comprehensive understanding of basic Neural Networks, including their design, training processes, and applications. This experience has significantly enhanced my knowledge in the field of artificial intelligence and prepared me for advanced research and development in machine learning technologies.</p>
                        </div>
                        </Col>
                    </Row>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("ai")}>Back</Button>
                </Container>
            </>
        )
    }
}

export default Research