import React from 'react';
import NonHomeHeader from './nonHomeHeader';
import NonHomeFooter from './nonHomeFooter';
import '../styles/index.scss';

const NonHomeLayout = (props) => {
    return (
        <div class="layout-content-order">
            <div class="website-real-estate">
                <NonHomeHeader />
                {props.children}
            </div>
            <NonHomeFooter />
        </div>
    );
}

export default NonHomeLayout;