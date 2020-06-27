import React from 'react'

export default function CustomRadioButton({children, ...props}) {

    return (
        <div className={`custom-radio-button ${props.variant ? props.variant : 'transparent'}`}>
            <input type="radio" name={props.name} id={props.id} onChange={props.onChange} />
            <label htmlFor={props.id}>{children}</label>
        </div>
    );
}