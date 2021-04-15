import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';

import * as headerStyles from '../styles/header.module.scss';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="sm">
                <Container>
                    <Navbar.Brand>
                        <Link className={headerStyles.logo} to="/">
                            <h1>E&M Acoustic</h1>
                        </Link>        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ width: "100%" }}>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} to="/">Home</Link> 
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                   <Link className={headerStyles.pageLinks} to="/about">About</Link> 
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} to="/portfolio">Portfolio</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} to="/contact">Contact</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                <a className={headerStyles.pageLinks} href="tel:860-543-3160"><p>CALL NOW <FaPhoneAlt className={headerStyles.phoneIcon} />860-543-3160</p></a>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;