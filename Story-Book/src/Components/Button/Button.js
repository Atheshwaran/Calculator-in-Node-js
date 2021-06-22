import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {

    const { variant, name, status, } = props;
   
    const recquirement = (status) ? 'recquire' : 'notRecquire'; 

   // console.log(onClick);
    
    return (                                                                 //  onClick = {onClick("Clicked")}
              <button className={[`button ${variant}`, recquirement].join(' ')}  > {name}  </button>
    )
}

Button.defaultProps = { variant:'primary', name:'Click', status: true};

Button.propTypes = {
    variant: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool,
    //onClick: PropTypes.func.isRequired
}

export default Button;