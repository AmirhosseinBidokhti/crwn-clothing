import React from 'react';

import './form-input.styles.scss';


// in order to selectively render laber we pass in a label prop.
//
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? 
                (<label 
                className={`${otherProps.value.length ? 'shrink' : ''} 
                form-input-label`}
                >
                {label}
                </label>)
                : null
        }
    </div>

);
export default FormInput;
