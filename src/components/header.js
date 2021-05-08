import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { detect } from 'detect-browser';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import * as headerStyles from '../styles/header.module.scss';

const Header = () => {
    const browser = detect();
    const createLinkProps = (id) => browser.name === `safari` ? { href: id } : {};

    return (
        <header id="top" className={headerStyles.navbar}>
            <Navbar collapseOnSelect expand="sm" style={{ padding: "0" }}>
                <Container className={headerStyles.navbarLayout}>
                    <Navbar.Brand>
                        <Link to="/">
                            <StaticImage
                                src='../assets/images/rcLogo.png'
                                alt='R.C Logo'
                                className={headerStyles.logo}
                                placeholder="blurred"
                            />
                        </Link>        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={headerStyles.responsiveHamburger} />
                    <Navbar.Collapse id="responsive-navbar-nav" className={headerStyles.responsiveCollapse}>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item>
                                <Nav.Link as="a" className={headerStyles.pageLinks} to="/">
                                   Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => scrollTo('#about')}>
                                <Nav.Link as="a" className={headerStyles.pageLinks} {...createLinkProps('#about')}>
                                    About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => scrollTo('#portfolio')}>
                                <Nav.Link as="a" className={headerStyles.pageLinks}  {...createLinkProps('#portfolio')}>
                                    Portfolio
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => scrollTo('#contact')}>
                                <Nav.Link as="a" className={headerStyles.pageLinks} {...createLinkProps('#contact')}>
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="a">
                                    <a className={headerStyles.pageLinks} href="tel:860-8888-1111">CALL NOW <FaPhoneAlt className={headerStyles.phoneIcon} style={{ fill: "white" }} />860-888-1111</a>
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