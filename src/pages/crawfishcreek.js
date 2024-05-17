import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import placeholder1 from '../images/Placeholder-1.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholder from '../images/placeholder-2.png'
import cc from '../images/cc.png'

class CrawfishCreek extends Component {

    handleRedirect() {
        const externalUrl = 'https://github.com/Noahr8/crawfishcreek';
        window.location.href = externalUrl;
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        <div className="project-template-detail-wrapper">
                        <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1%'}}>Crawfish Creek</h3>
                        <p>Crawfish Creek is a thrilling 3D infinite scroller developed by Roaring Star Studios, a team of four dedicated game developers, as part of their Computer Game Development course. Created in Unity, with all assets meticulously crafted in Blender by the team, Crawfish Creek offers a visually immersive and engaging gameplay experience.</p>
                        <p>In Crawfish Creek, players take on the role of a resilient crawfish navigating the treacherous waters of an endless river. The primary objective is to avoid being eaten by fish and overcome various obstacles that come your way. As you maneuver through the river, you'll encounter power-ups that provide temporary boosts and coins that can be collected.</p>
                        <p>The coins you gather can be spent in the in-game shop, where you can customize your crawfish with a variety of fun and unique options. This customization adds a personal touch to your gameplay experience, allowing you to tailor your crawfish to your liking.</p>
                        <p>The game features an exciting dash mechanic, enabling your crawfish to quickly evade danger and navigate tight spots. However, be cautious—venturing too close to the river's surface risks an encounter with predatory birds, adding an extra layer of challenge and excitement.</p>
                        <p>With its captivating 3D visuals, dynamic gameplay, and endless challenges, Crawfish Creek offers an addictive and entertaining experience that will keep players coming back for more. Dive into the adventure and see how long you can survive the perils of Crawfish Creek!</p>
                        </div>
                        </Col>
                        <Col xs lg="3">
                        <div className="project-template-card-wrapper">
                        <Card className="text-center flex-fill">
                            <Card.Img variant="top" src={cc} />
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

export default CrawfishCreek