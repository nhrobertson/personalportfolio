import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Navbar expand='lg' style={{marginBottom: "0%"}}>
                <Container>
                <Navbar.Brand >
                <div onClick={() => {this.props.switchPageTo("home")}}>
                <img
                    src={logo}
                    width="10%"
                    height="10%"
                    alt="logo"
                />
                </div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {this.props.switchPageTo("home")}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {this.props.switchPageTo("projects")}}>Projects</Nav.Link>
                        <NavDropdown title="Other" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => {this.props.switchPageTo("academics")}}>Academics</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {this.props.switchPageTo("resume")}}>Resume</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {this.props.switchPageTo("github")}}>GitHub</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link onClick={() => {this.props.switchPageTo("contact")}}>Contact</Nav.Link>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
    }
}

export default NavBar;