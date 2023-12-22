import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'

class Thanks extends Component {
   
    render() {
        return (
            <>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>
                        <h1>Thanks for the Message!</h1>
                    </Card.Title>
                    <Card.Text>
                        I will get back to you shortly.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='thanks-button-wrapper'>
            <Button onClick={() => this.props.switchPageTo("home")} className='thanks-button'>Home</Button>
            </div>
            </>
        )
    }
}

export default Thanks