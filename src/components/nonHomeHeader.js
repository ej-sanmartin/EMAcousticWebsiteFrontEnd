import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';

import * as headerStyles from '../styles/header.module.scss';

const NonHomeHeader = () => {
    return (
        <header id="items-top" className={headerStyles.navbar}>
            <Navbar collapseOnSelect expand="sm" style={{ padding: "0" }}>
                <Container className={headerStyles.navbarLayout}>
                    <Navbar.Brand>
                        <Link to="/">
                            <StaticImage
                                src='../assets/images/rcLogo.png'
                                alt='R.C Logo'
                                className={headerStyles.logo}
                            />
                        </Link>        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={headerStyles.responsiveHamburger} />
                    <Navbar.Collapse id="responsive-navbar-nav" className={headerStyles.responsiveCollapse}>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item as="button">
                                <Nav.Link>
                                   <Link className={headerStyles.pageLinks} to="/">Home</Link> 
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="button">
                                <Nav.Link>
                                   <Link className={headerStyles.pageLinks} to="/">About</Link> 
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="button">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} to="/">Portfolio</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="button">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} to="/">Contact</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="button">
                                <Nav.Link>
                                    <Link className={headerStyles.pageLinks} href="tel:860-8888-1111">CALL NOW <FaPhoneAlt className={headerStyles.phoneIcon} style={{ fill: "white" }} />860-888-1111</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NonHomeHeader;