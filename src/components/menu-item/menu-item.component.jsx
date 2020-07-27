import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// at least at the time we created this component we didnt need state or lifecycle methods.
// history and match comes from the HomePage component (withRouter ability)
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        // Dynamically adding class. if there was any size prop passed, it would be rendered otherwise np!
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >

        <div 
        className="background-image"
        
        // style property gets an object to handle CSS properties. (creating dynamic CSS), 
        // Other styles regarding this image in scss folder since its static
        style={
            {backgroundImage: `url(${imageUrl})`}
        }
        />
            
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
// now this component has access to the properties provided by react-router. like loaction, match, history
