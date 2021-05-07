import React from 'react';
import { Link } from 'gatsby';
import NonHomeLayout from '../components/nonHomeLayout';
import * as errorPageStyles from '../styles/errorPage.module.scss';

const NotFound = () => {
    return (
        <NonHomeLayout>
            <div className={`${errorPageStyles.openingImage} ${errorPageStyles.parallax}`}></div>
            <div className={errorPageStyles.openingMessageContainer}>
                <h2>DANGER</h2>
                <h3>YOU HAVE GOTTEN LOST AND ARE ENTERING A <span>RESTRICTED AREA</span></h3>
                <p>Allow us to take you someplace safe</p>
                <Link className={errorPageStyles.returnButton} to="/">RETURN</Link>
            </div>
        </NonHomeLayout>
    );
}

export default NotFound;