import React from 'react';
import * as footerStyles from '../styles/footer.module.scss';
import { footerCompanySummary } from '../assets/content/text.js';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { IconContext } from '@react-icons/all-files';
import { HiOutlinePhone } from '@react-icons/all-files/hi/HiOutlinePhone';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { BiUpArrow } from '@react-icons/all-files/bi/BiUpArrow';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { isIOS } from 'react-device-detect';
import { detect } from 'detect-browser';

const Footer = () => {
    // keeps copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    const browser = detect();
    const createLinkProps = (id) => browser.name === `safari` ? { href: id } : {};

    return (
        <footer className={footerStyles.container}>
            <Container>
                <Row className={footerStyles.footerInfo}>
                    <Col sm={4}>
                        <h4>R.C. Acousticals</h4>
                        <p className={`${footerStyles.infoSpace}`}>{footerCompanySummary}</p>
                    </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <h4>Contact Info</h4>
                        <ul className={`${footerStyles.infoSpace}`}>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Address: 79 Mill Brook Rd, East Hartford, CT, 06118' }}>
                                <li><AiOutlineHome style={{ fill: "white" }} />101 Main St., East Hartford, CT 06118</li>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Phone Number: 860 888 1111' }}>
                                <li><HiOutlinePhone style={{ fill: "white" }} /> 860 - 888 - 1111</li> 
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Email' }}>
                                <li><HiOutlineMail style={{ fill: "white" }} />contact@rc_acoustics.com</li>
                            </IconContext.Provider>
                        </ul>
                    </Col>
                </Row>
                <div className={footerStyles.copyrightContainer}>
                    <p className={footerStyles.copyright}>Copyright © R.C. Acousticals {year}. All Rights Reserved</p>  
                </div>
                <div className={footerStyles.topButtonContainer}>
                    <Nav.Item style={{ marginBottom: "1em" }} as="button" onClick={() => scrollTo('#top')}>
                        <Nav.Link as="a" {...createLinkProps('#top')}>
                            <IconContext.Provider value={{ size: '3em', color: 'white' }}>
                                <BiUpArrow style={{ fill: "white" }} />
                            </IconContext.Provider>
                        </Nav.Link>
                    </Nav.Item>
                </div>
            </Container>
        </footer>

       
    );
}

export default Footer;