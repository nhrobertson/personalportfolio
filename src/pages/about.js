import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import ring from '../images/ringceremony.jpg'
import logo from '../logo.png'

class About extends Component {

    handleRedirect() {
        const externalUrl = 'http://nhrobertson.com';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                    <Col xs={12} lg={9}>
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>About Me</h3>
                        <p>Hello! My name is Noah Robertson, and I grew up in Raleigh, North Carolina. From a young age, I've always valued hard work and dedication. Starting at age 15, I took on various jobs that taught me invaluable lessons about working with people and building a strong work ethic.</p>
                        <p>I graduated from high school in 2020 during the COVID-19 pandemic and began my journey at the University of South Carolina in August of the same year. I recently graduated with honors, earning a Bachelor of Science in Computer Engineering with a 3.7 GPA.</p>
                        <p>Throughout my life, I've been actively involved in sports, including soccer and basketball, but my main passion has always been tennis. During college, I joined the Phi Delta Theta Fraternity, where I developed essential social skills and formed lifelong friendships.</p>
                        <p>Currently, I am back home with my parents and our two dogs, eagerly anticipating the next stage of my life. I'm excited to apply my knowledge and skills in software development and engineering to new and challenging opportunities.</p>
                        <p>Thank you for visiting my portfolio!</p>
                    </Col>
                    <Col xs={12} lg={3}>
                        <img src={ring} className="about-pic" alt="Research" />
                    </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default About