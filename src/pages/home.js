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
                    <p>Graduating in May of 2024, I am an aspiring engineer with 95% of a Computer Engineering Degree completed</p>
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
            <Col xs lg="3">
                <img src={researchpic} style={{width: '400px', borderRadius: '2%', paddingRight: '0'}}/>
            </Col>
            <Col style={{marginRight: '300px'}}>
            <h3>Hello! My Name is Noah Robertson.</h3>
            <p>
                I am a current student at the University of South Carolina. I have almost completed a Computer Engineering Degree.
                I have always found it important to constantly be working as since the age of 15 I have held several jobs
                which have gained me a vast amount of workforce experience, helping me obtain skills in negotiation, communication, cooperation, and collaboration.
            </p>
            <p>
                Currently, I have progressed in my field of study extensively and effectively. I have complete a multitude of courses that have
                allowed me to further expand my knowledge base while helping me imploy these learned tactics and theories in the field of Computer Science.
                I have worked extensively with a multitude of programming languages enabling me to be able to pick up programming languages very quickly.
                Several courses required different languages which have now enabled me to be able to implement several applications in several languages.
                As soon as my transcript is able to be released I will add it to this website detailing several courses and the completed requirements.
            </p>
            <p>
                In the meantime, please feel free to checkout several of my projects that I have worked on in the past. This includes school projects aswell as personal projects.
                It will also detail my research oppurtunity that I was able to complete with McNair Junior Fellows which is pictured to the left. You can find these multiude of projects
                in the Projects section. If you are interested in learning even more about me please refer to the About Me page. I also have several links which will link you to my Resume and Personal GitHub account.
            </p>
            <p>
                If you would like to contact me please feel free to use the Contact section!
            </p>
            </Col>
        </Row>
        </div>
        </>
        );
    }
}

export default Home;