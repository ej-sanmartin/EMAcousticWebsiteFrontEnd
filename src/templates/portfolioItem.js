import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Carousel } from 'react-bootstrap';
import NonHomeLayout from '../components/nonHomeLayout';

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
                fluid(maxWidth: 1000) {
                    src
                }
                title
            }
            projectImages {
                fluid(maxWidth: 500) {
                    src
                }
            }
        }
    }
`;

const PortfolioItem = (props) => {
    useEffect(() => {
        document.querySelector('body').scrollTo(0, 0);
    }, []);

    const image = props.data.contentfulPortfolioProfile.projectHeaderPhoto.fluid.src;
    
    let images = [];
    props.data.contentfulPortfolioProfile.projectImages.map(item => images.push(item.fluid.src));

    return (
        <NonHomeLayout>
            <div className={portfolioItemStyles.headerBox}></div>
            <div className={portfolioItemStyles.portfolioHeadingContainer}>
                <div>
                <h3>Portfolio</h3>
                <hr />
                <p>Our Work</p> 
                </div>
            </div>
            <img
                src={image}
                alt={props.data.contentfulPortfolioProfile.projectHeaderPhoto.title}
                className={portfolioItemStyles.mainImage}
            />
            <div className={portfolioItemStyles.projectDetails}>
                <h1>{props.data.contentfulPortfolioProfile.projectName}</h1>
                <hr className={portfolioItemStyles.hrLine} />
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
                <h2 className={portfolioItemStyles.galleryHeader}>LET'S LOOK AT THE DETAILS</h2>
                <hr className={portfolioItemStyles.galleryLine} />
                <Carousel className={portfolioItemStyles.gallery}>
                    {images.map((image) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <Link className={portfolioItemStyles.returnButton} to="/"><p>Return</p></Link>
            </div>
        </NonHomeLayout>
    );
};

export default PortfolioItem;