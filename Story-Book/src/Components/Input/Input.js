import React from 'react';
import './Input.css';

function Input (props) {

    const { type} = props;

    return (
        //  <input className = {`input ${size}`} />
        <>
         <input type={type} />
        </>
    )

}

export default Input;