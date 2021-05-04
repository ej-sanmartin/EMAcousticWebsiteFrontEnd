import React from 'react';

import PortfolioItemsHeader from './portfolioItemsHeader';
import PortfolioItemsFooter from './portfolioItemsFooter';

import '../styles/index.scss';

const PortfolioLayout = (props) => {
    return (
        <div class="layout-content-order">
            <div class="website-real-estate">
                <PortfolioItemsHeader />
                {props.children}
            </div>
            <PortfolioItemsFooter />
        </div>
    );
}

export default PortfolioLayout;