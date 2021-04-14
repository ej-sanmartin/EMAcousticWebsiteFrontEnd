import React from 'react';

const Footer = () => {
    // keep copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    return (
        <p>Copyright © E&M Acoustic {year}</p>
    );
}

export default Footer;