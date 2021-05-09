import React from 'react';
import * as homeStyles from '../../styles/home.module.scss';

const ServiceCard = (props) => {
    return (
        <div className={homeStyles.serviceCard}>
          <img
            src={props && props.service && props.service.image}
            alt={props && props.service && props.service.imageAlt}
            className={homeStyles.serviceCardImage}
          />
          <h5>{props && props.service && props.service.service}</h5>
          <p>{props && props.service && props.service.description}</p>
        </div>
    );
}

export default ServiceCard;