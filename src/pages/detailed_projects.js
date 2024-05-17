import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import piccheck from '../images/PicCheck.png'
import logo from '../logo.png'
import wtlogo from '../images/wtlogo.png'

class DetailedProjects extends Component {
    render() {
        return (
            <>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>School and Personal Projects</Card.Title>
                    <Card.Text>
                        Here you can view the various school and personal projects that I have worked on throughout my time as a software developer and aspiring engineer.
                    </Card.Text>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("projects")}>Back</Button>
                </Card.Body>
            </Card>
            <Row style={{padding: '5%', paddingTop: '2.5%', paddingBottom: '2.5%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={wtlogo} />
                <Card.Body>
                    <Card.Title>Welcome Together</Card.Title>
                    <Card.Text>
                        A web-app designed to make creating and planning events easier. Implemented using React as the front-end and Firebase as the backend. Developed in a group of 5.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("welcome_together")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>This Website</Card.Title>
                    <Card.Text>
                        This is a simple React and React-Bootstrap webapp that details my portfolio.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("this-website")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={piccheck} />
                <Card.Body>
                    <Card.Title>PicCheck</Card.Title>
                    <Card.Text>
                        Android App developed in a team of two that is an evolved task manager that incorporates completion by taking photos.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("piccheck")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row style={{padding: '5%', paddingTop: '0%'}}>
            <Col className="d-flex"> 
            </Col>
            </Row>
            </>
        )
    }
}

export default DetailedProjects