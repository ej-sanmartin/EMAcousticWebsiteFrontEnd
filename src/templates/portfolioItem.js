import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import PortfolioLayout from '../components/portfolioLayout';

import * as portfolioItemStyles from '../styles/portfolioItem.module.scss';

export const query = graphql`
    query($slug: String!){
        contentfulPortfolioProfile (slug: {eq: $slug}) {
            projectName
            location
            generalContractor
            projectData(formatString: "MMMM Do, YYYY")
            projectDescription {
                raw
            }
            projectHeaderPhoto {
                gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, PNG, WEBP]
                  )
                title
            }
        }
    }
`;

const PortfolioItem = (props) => {
    const image = getImage(props.data.contentfulPortfolioProfile.projectHeaderPhoto);

    return (
        <PortfolioLayout>
            <div className={portfolioItemStyles.headerBox}></div>
            <GatsbyImage
                image={image}
                alt={props.data.contentfulPortfolioProfile.projectHeaderPhoto.title}
            />
            <h1>{props.data.contentfulPortfolioProfile.projectName}</h1>
            <ul>
                <li>
                    <p><span>Date: </span>{props.data.contentfulPortfolioProfile.projectData ? props.data.contentfulPortfolioProfile.projectData : `Not currently available`}</p>
                </li>
                <li>
                    <p><span>Location: </span>{props.data.contentfulPortfolioProfile.location ? props.data.contentfulPortfolioProfile.location : `Not currently available`}</p>
                </li>
                <li>
                    <p><span>General Contractor: </span>{props.data.contentfulPortfolioProfile.generalContractor ? props.data.contentfulPortfolioProfile.generalContractor : `Not currently available`}</p>
                </li>
            </ul>
            <h2>What We Did</h2>
            { documentToReactComponents(JSON.parse(props.data.contentfulPortfolioProfile.projectDescription.raw)) }
        </PortfolioLayout>
    );
};

export default PortfolioItem;