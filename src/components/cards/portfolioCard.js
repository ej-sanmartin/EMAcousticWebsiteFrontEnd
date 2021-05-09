import React from 'react';
import { Link } from 'gatsby';
import * as homeStyles from '../../styles/home.module.scss';

const PortfolioCard = (props) => {
    let image = props && props.edge && props.edge.node.projectHeaderPhoto.fluid.src;

    return (
        <Link className={homeStyles.portfolioItem} to={`/portfolio/${props && props.edge && props.edge.node.slug}`}>
            <img
            src={image}
            className={homeStyles.portfolioItemImage}
            alt={props && props.edge && props.edge.node.projectHeaderPhoto.title}
            />
            <div className={homeStyles.portfolioItemImageOverlay}>
            <h4 className={homeStyles.portfolioItemTitle}>{props && props.edge && props.edge.node.projectName}</h4>
            <p className={homeStyles.portfolioItemLocation}>{props && props.edge && props.edge.node.location}</p>
            </div>
      </Link>
    );
}

export default PortfolioCard;