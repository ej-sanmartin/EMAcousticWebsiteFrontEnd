import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { isIOS } from 'react-device-detect';
import { detect } from 'detect-browser';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { linkDestinationIds, classNameToFind } from '../assets/content/text.js';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import * as headerStyles from '../styles/header.module.scss';

const Header = () => {
  const browser = detect();
  const createLinkProps = (id) => browser.name === 'safari' ? { href: id } : {}

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
              <Nav.Item as="button">
                <Nav.Link>
                  <a className={headerStyles.pageLinks} to="/">Home</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="button" onClick={() => scrollTo('#about')}>
                <Nav.Link {...createLinkProps('#about')}>
                  <a className={`${headerStyles.pageLinks} ${headerStyles.pageLinkSelector}`}>About</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="button" onClick={() => scrollTo('#portfolio')}>
                <Nav.Link {...createLinkProps('#portfolio')}>
                  <a className={`${headerStyles.pageLinks} ${headerStyles.pageLinkSelector}`}>Portfolio</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="button" onClick={() => scrollTo('#contact')}>
                <Nav.Link {...createLinkProps('#contact')}>
                  <a className={`${headerStyles.pageLinks} ${headerStyles.pageLinkSelector}`}>Contact</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="button">
                <Nav.Link>
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
