import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import './Hooks.css';

function  Hooks(props) {
 
   const {Value1 , Value2, Delay} = props;

    const [counter1, setCount1] = useState(0);
    const [counter2, setCount2] = useState(0);

    const increaser1 = () => {
        setCount1(counter1 + Value1);
    }

    const increaser2 = () => {
        setCount2(counter2 + Value2);
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i != Delay) 
        i++;
        return counter1 % 2 === 0} , [counter1]) 
    
    
    return(
        <>
        <button onClick={increaser1} > Counter1 = {counter1} </button>
        <span>{isEven ? 'Even' : 'Odd'}</span> <br />

        <button onClick={increaser2} > Counter2 = {counter2} </button>

        </>
    )
 
}


Hooks.defaultProps = {Value1: 1, Value2: 2, Default: 9000000};

Hooks.propTypes = {
    Value1: PropTypes.number,
    Value2: PropTypes.number,
    Delay: PropTypes.number,

}

export default Hooks;