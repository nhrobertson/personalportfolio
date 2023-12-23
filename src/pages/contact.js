import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import { db } from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import firebase from 'firebase/app'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit() {
        console.log("Submitted!")
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const eventsCollectionRef = collection(db, "messages")
        if (this.state.name == "") {
            alert("Please enter your name.")
            return
        }
        if (this.state.email == "") {
            alert("Please enter your email.")
            return
        }
        if (this.state.message == "") {
            alert("Please enter a message.")
            return
        }

        try {
            await addDoc(eventsCollectionRef, {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        } 
        catch (error) {
            console.error(error.message);
        }

        this.props.switchPageTo("thanks");
    }

    render() {
        return (
            <>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Contact Me!</Card.Title>
                </Card.Body>
            </Card>
            <div className="contact-form-wrapper">
            <Form className="contact-form" onSubmit={this.handleSubmit}>
                <div className='contact-name-wrapper'>
                <Form.Group controlId="formContact">
                    <Form.Control
                    className='contact-name'
                    aria-label='Name'
                    placeholder='Name'
                    onChange={(e) => this.handleNameChange(e)}
                    />
                </Form.Group>
                </div>
                <div className="contact-name-wrapper">
                <Form.Group controlId="formContact">
                    <Form.Control
                    className='contact-email'
                    aria-label='email'
                    placeholder='Email'
                    onChange={(e) => this.handleEmailChange(e)}
                    />
                </Form.Group>
                </div>
                <div className='contact-message-wrapper'>
                <Form.Control controlId="formContact"
                    className='contact-message'
                    as='textarea'
                    //style={{ width: '50%', height: '100px'}}
                    placeholder='Message'
                    onChange={(e) => this.handleMessageChange(e)}/>
                </div>
                <div className="contact-submit-button-wrapper">
                <Button type="submit" variant="primary">Send</Button>
                </div>
            </Form>
            </div>
            </>
        )
    }
}

export default Contact