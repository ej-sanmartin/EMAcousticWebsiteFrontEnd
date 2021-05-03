import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

// import * as portfolioItemStyles from '../styles/portfolioItem.module.scss';

export const query = graphql`
    query($slug: String!){
        contentfulPortfolioProfile (slug: {eq: $slug}) {
            projectName
            location
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
        <Layout>
            <GatsbyImage
                image={image}
                alt={props.data.contentfulPortfolioProfile.projectHeaderPhoto.title}
            />
            <h1>{props.data.contentfulPortfolioProfile.projectName}</h1>
            <ul>
                <li>
                    <p>Date: {props.data.contentfulPortfolioProfile.projectData}</p>
                </li>
                <li>
                    <p>Location: {props.data.contentfulPortfolioProfile.location}</p>
                </li>
            </ul>
            <h2>What We Did</h2>
            { documentToReactComponents(JSON.parse(props.data.contentfulPortfolioProfile.projectDescription.raw)) }
        </Layout>
    );
};

export default PortfolioItem;