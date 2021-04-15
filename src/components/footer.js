import React from 'react';

import * as footerStyles from '../styles/footer.module.scss';

const Footer = () => {
    // keep copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    return (
        <div className={footerStyles.container}>
           <p>Copyright © E&M Acoustic {year}</p>  
        </div>
       
    );
}

export default Footer;