import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
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
                </Card.Body>
            </Card>
            <Row style={{padding: '5%', paddingTop: '2.5%', paddingBottom: '2.5%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={wtlogo} />
                <Card.Body>
                    <Card.Title>Welcome Together</Card.Title>
                    <Card.Text>
                        A web-app designed to make creating and planning events easier. Currently a team member on the Welcome Together development team. Currently in development.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("welcome_together")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>This Website</Card.Title>
                    <Card.Text>
                        This is a simple React and React-Bootstrap webapp that details my portfolio.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Computer Engineering Projects</Card.Title>
                    <Card.Text>
                        This will detail many of the Computer Engineering projects that I have worked on using the FPGA board, quartus, and other hardware specific aspects.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row style={{padding: '5%', paddingTop: '0%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Algorithms</Card.Title>
                    <Card.Text>
                        Here will detail many of the algorithms that I have implemented over the years of pursuing a Computer Engineering Degree.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Finance Tracker</Card.Title>
                    <Card.Text>
                        A project using WPF and C# to create a functional financial tracker that will be used for locally keeping track of finances. Currently in development.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Other Minor Projects</Card.Title>
                    <Card.Text>
                        Here will detail other minor projects that I have worked on such as incomplete personal projects and other school projects that are not related to Computer Science.
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

export default DetailedProjects