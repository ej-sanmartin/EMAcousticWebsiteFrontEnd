import React from 'react';

import * as footerStyles from '../styles/footer.module.scss';

import { footerCompanySummary } from '../assets/content/text.js';

import { Row, Col, Container } from 'react-bootstrap';

import { IconContext } from '@react-icons/all-files';
import { HiOutlinePhone } from '@react-icons/all-files/hi/HiOutlinePhone';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';

const Footer = () => {
    // keeps copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    return (
        <footer className={footerStyles.container}>
            <Container>
                <Row className={footerStyles.footerInfo}>
                    <Col sm={4}>
                        <h4>E & M Acoustic LLC</h4>
                        <p className={`${footerStyles.infoSpace}`}>{footerCompanySummary}</p>
                    </Col>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <h4>Contact Info</h4>
                        <ul className={`${footerStyles.infoSpace}`}>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Address: 79 Mill Brook Rd, East Hartford, CT, 06118' }}>
                                <li><AiOutlineHome />101 Main St., East Hartford, CT 06118</li>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Phone Number: 860 5433160' }}>
                                <li><HiOutlinePhone /> 860 - 543 - 3160</li> 
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '1.5em', title: 'Email' }}>
                                <li><HiOutlineMail /></li>
                            </IconContext.Provider>
                        </ul>
                    </Col>
                </Row>
                <div>
                    <p className={footerStyles.copyright}>Copyright © E&M Acoustic LLC {year}. All Rights Reserved</p>  
                </div>
            </Container>
        </footer>

       
    );
}

export default Footer;