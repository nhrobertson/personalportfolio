import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

class AI extends Component {
    render() {
        return (
            <>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>AI Research and Development</Card.Title>
                    <Card.Text>
                        Here you can checkout what I have personally done with AI over the past recent summer and get updates on my current progress in my Graduate Level Artificial Intelligence Course. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row style={{padding: '5%', paddingTop: '2.5%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Research</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Simple Digit Recognition Using Go</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </>
        )
    }
}

export default AI