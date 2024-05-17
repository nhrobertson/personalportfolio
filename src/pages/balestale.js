import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import bt from '../images/bt.png'

class BalesTale extends Component {

    handleRedirect() {
        const externalUrl = 'https://github.com/Noahr8/BalesTaleGame';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Bale's Tale</h3>
                        <p>Bale's Tale is an exciting 2D platformer developed by Roaring Star Studios, a talented team of four passionate game developers, during their Computer Game Development course. Built in Unity, every aspect of the game, from the vibrant assets to the engaging mechanics, was crafted entirely by the team.</p>
                        <p>In Bale's Tale, players embark on a thrilling adventure across three meticulously designed levels. The protagonist, Bale, is equipped with unique abilities that set this platformer apart. Players can utilize Bale's grappling hook to swing across chasms, navigate treacherous terrain, and reach otherwise inaccessible areas. This dynamic grappling mechanic introduces a layer of strategy and skill, requiring precise timing and coordination.</p>
                        <p>Additionally, Bale can perform a powerful ground pound while in mid-air, unleashing massive damage on enemies and obstacles below. This move not only adds an exhilarating combat element but also serves as a crucial tool for solving puzzles and progressing through the levels.</p>
                        <p>With its captivating gameplay, striking visuals, and innovative mechanics, Bale's Tale promises an unforgettable platforming experience that challenges players to master the art of grappling and ground pounding. Join Bale on this epic journey and discover the secrets that lie within each level.</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={bt} />
                            <Card.Body>
                                <Card.Title>GitHub Release Link</Card.Title>
                                <Card.Text>
                                    Takes you to the git hub page which has the build of the game.
                                </Card.Text> 
                                <Button variant="primary" onClick={this.handleRedirect}>Go</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        </Col>
                    </Row>
                    <Button variant='primary' onClick={() => this.props.switchPageTo("games")}>Back</Button>
                </Container>
            </>
        )
    }
}

export default BalesTale