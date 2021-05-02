const { create } = require('domain');
const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const portfolioItem = path.resolve('./src/templates/portfolioItem.js');

    const res = await graphql(`
        query {
            allContentfulPortfolioProfile {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulPortfolioProfile.edges.forEach((edge) => {
        createPage({
            component: portfolioItem,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        });
    })
};