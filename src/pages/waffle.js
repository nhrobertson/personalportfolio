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

class Waffle extends Component {

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
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>To Be Announced</h3>
                        <p>As of right now, the game is under development with core gameplay mechanic's being implemented. It is currently being worked on by Roaring Star Studios.</p>
                        <p>The projected release of the proof of concept will is the middle of 2025. Check back then to see what the game is about!</p>
                        </div>
                        </Col>
                    </Row>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("games")}>Back</Button>
                </Container>
            </>
        )
    }
}

export default Waffle