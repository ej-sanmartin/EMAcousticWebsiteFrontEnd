import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const SEO = ({ newTitle, newDescription }) => {
    const { site } = useStaticQuery(query);

    const seo = {
        title: newTitle || site.siteMetadata.title,
        description: newDescription || site.siteMetadata.description,
    };

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />

            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
        </Helmet>
    );
};

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
}