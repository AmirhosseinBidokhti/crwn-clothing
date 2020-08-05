import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (

    // both input with submit type and button can trigger the onSubmit method.
    // they can both take property of type submit and both can submit the form.
    
    <button className={` 
    ${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
    >
        {children} 
    
    </button>

);

export default CustomButton;