import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

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
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Welcome Together</Card.Title>
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
                    <Card.Title>This Website</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("home")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Robotics</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("home")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row style={{padding: '5%', paddingTop: '0%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>C++ School Projects</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("home")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>File Sorter (Unfinished)</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("home")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Go Lang Discovery</Card.Title>
                    <Card.Text>
                        Temp
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("home")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </>
        )
    }
}

export default DetailedProjects