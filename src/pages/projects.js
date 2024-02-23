import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import projectpic from '../images/projectspic1.png'
import aipic from '../images/aipic.png'
import gamingpic from '../images/gamingpic.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

class Projects extends Component {
    render() {
        return (
            <>
            <Row style={{padding: '5%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={projectpic} />
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <Card.Text>
                        Here you can view the various school & non-school projects that I have worked on. This includes engineering projects.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("detailed_projects")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={aipic} />
                <Card.Body>
                    <Card.Title>AI</Card.Title>
                    <Card.Text>
                        Here you can view my work with Artificial Intellegence including school work and my research into the subject.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("ai")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={gamingpic} />
                <Card.Body>
                    <Card.Title>Games</Card.Title>
                    <Card.Text>
                        Here you can view the various video games that I have worked on.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("games")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </>
        )
    }
}

export default Projects