import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../images/photo1.jpg'
import placeholder1 from '../images/Placeholder-1.png'

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
                    <p>On top of working with various programming techinques, I have also a lot of experience working with various embedded systems and robotics, implementing PID controllers and incorporating sensors.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div style={{padding: '2.5%'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ut diam quam nulla porttitor massa id neque aliquam. Gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta. Orci porta non pulvinar neque laoreet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Quisque non tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor. Elit pellentesque habitant morbi tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>
        </div>
        </>
        );
    }
}

export default Home;