import React from 'react';

import * as footerStyles from '../styles/footer.module.scss';

const Footer = () => {
    // keeps copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.footerInfo}>
                <div>
                    <h4>E & M Acoustic</h4>
                    <p></p>
                </div>
                <div></div>
                <div>
                    <h4>Contact Info</h4>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className={footerStyles.copyright}>Copyright © E&M Acoustic {year}</p>  
             </div>
        </footer>

       
    );
}

export default Footer;