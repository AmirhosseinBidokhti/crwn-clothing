import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (

    // both input with submit type and button can trigger the onSubmit method.
    // they can both take property of type submit and both can submit the form.
    
    <button className={` ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
    >
        {children} 
    
    </button>

);

export default CustomButton;