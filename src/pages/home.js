import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../images/photo1.jpg'
import placeholder1 from '../images/CaraselImage.png'
import researchpic from '../images/photo1.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {


    render() {
        return (
        <>
        <Carousel fade style={{width: '100%'}}>
            <Carousel.Item interval={3500}>
                <img src={placeholder1}/>
                <Carousel.Caption>
                    <h4>Noah Robertson</h4>
                    <p>Recent Graduate from the University of South Carolina with a Bachelors of Science in Computer Engineering.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2250}>
                <img src={placeholder1}/>
                <Carousel.Caption>
                    <h4>Software Development</h4>
                    <p>Worked with C++, C#, Go, Javascript, and other programming languages to perform various complicated sorting algorithms and other applications</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1750}>
                <img src={placeholder1}/>
                <Carousel.Caption>
                    <h4>Aspiring Engineer</h4>
                    <p>In addition to working with various programming techinques, I have extensive experience working with various embedded systems and robotics, implementing PID controllers and incorporating sensors.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div style={{padding: '2.5%'}}>
        <Row>
      <Col xs={12} lg={3}>
        <img src={researchpic} className="home-pic" alt="Research" />
      </Col>
      <Col xs={12} lg={9}>
        <h3>Hello! My Name is Noah Robertson.</h3>
        <p>I recently graduated with honors from the University of South Carolina, earning a Bachelor of Science in Computer Engineering. I am currently seeking opportunities to advance my career in software development and engineering.</p>
        <p>
            In the meantime, I invite you to explore my diverse range of projects, which includes both academic and personal endeavors. You can also learn about my research experience with the McNair Junior Fellows program, showcased in the Projects section. For more details about my background, please visit the About Me page.
        </p>
        <p>
            Additionally, you'll find links to my resume and personal GitHub account, where you can see more of my work. If you would like to get in touch, please use the Contact section. I look forward to connecting with you!
        </p>
      </Col>
    </Row>
        </div>
        </>
        );
    }
}

export default Home;