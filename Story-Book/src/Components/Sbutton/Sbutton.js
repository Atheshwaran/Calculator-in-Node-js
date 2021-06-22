import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`

    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.color ? props.color : 'yellow')}

`;


function Sbutton(props) {

    const { variant , name, status } = props;

    let color;

    const recquirement = (status) ? 'recquire' : 'notRecquire';

    if (variant === 'primary')
        color = 'deepskyblue';
    else if (variant === 'secondary')
        color = 'fuchsia';
    else if (variant === 'success')
        color = 'green';
    else if (variant === 'reject')
        color = 'red';


    return (<>

        <Button className={[`button ${variant}`, recquirement].join(' ')} color={color} > {name} </Button>

    </>

    )
}

Sbutton.defaultProps = { variant: 'primary', name: 'Login', status: true };

Sbutton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'reject']),
    name: PropTypes.string,
    status: PropTypes.bool
}

export default Sbutton;