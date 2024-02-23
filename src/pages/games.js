import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

class Games extends Component {
    render() {
        return (
            <>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Games</Card.Title>
                    <Card.Text>
                        Here you can check out the various games I have worked on - specifically using the Unity Game Engine with C# as a scripting language.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row style={{padding: '5%', paddingTop: '2.5%'}}>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Bale's Tale</Card.Title>
                    <Card.Text>
                        Simple 2D platformer developed in my Computer Game Development Course with the team Roarring Star Studios.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>Crawfish Creek</Card.Title>
                    <Card.Text>
                    Simple 3D infinite scroller developed in my Computer Game Development Course with the team Roarring Star Studios.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.switchPageTo("project_template")}>Go</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className="d-flex"> 
            <Card className="text-center flex-fill" style={{width: '30%'}}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>TBA Title</Card.Title>
                    <Card.Text>
                        First personal project after Computer Game Development. Pursuing a full release on steam. Now managing Roarring Star Studios team.
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

export default Games