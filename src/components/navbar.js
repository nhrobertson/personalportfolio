import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png'
import { useHistory } from 'react-router-dom';
import pdf from '../images/tempresume.pdf'


class NavBar extends Component {
    handleGitHubRedirect = () => {
        const externalUrl = 'https://github.com/nhrobertson';
        window.location.href = externalUrl;
    };

    openPdf = () => {
        const pdfPath = pdf;
    
        window.open(pdfPath, '_blank');
      };

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
                        <Nav.Link onClick={() => {this.props.switchPageTo("about")}}>About Me</Nav.Link>
                        <NavDropdown title="Links" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => alert("Official transcript available after graduation in May 2024")}>Transcript</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.openPdf()}>Resume</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.handleGitHubRedirect()}>GitHub</NavDropdown.Item>
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