import React from 'react';
import PropTypes from 'prop-types';

function Div (props) {

    const { Border_Radius, Bagrounnd_Color, Width, Height, Padding, Border_Color, Font_Family, Font_Size} = props;

    return (
        //  <input className = {`input ${size}`} />
        <div style={{backgroundColor: Bagrounnd_Color, border: `${Border_Radius} solid`, width: Width, height: Height, padding: Padding, borderColor: Border_Color, fontFamily: Font_Family , fontSize: Font_Size}}>
        
        <p>Environmental pollution refers to the mixing of some unwanted elements in our natural sources. It has become a serious problem not only in India but in the whole world. The government of every nation is taking every possible step to stop it in no time.

The Central Pollution Control Board by the Ministry of Environment, Forest and Climate Change keeps every record of environmental condition and regularly checks for pollution. There is an 'Environment Protection Act 1986' in the Indian Constitution, which focuses on protecting and growing the environment and making the atmosphere safe for survival.

The Government has also launched many schemes like Namami Gange to clean the dirty rivers of India. These acts are the hope for regaining the freshness of our environment. </p> 
        </div>
    )

}


Div.defaultProps = { Border_Radius: '2px', Bagrounnd_Color: 'blue', Width: "50%", Height: "", Padding: "10px", Border_Color: "red", Font_Family: "serif", Font_Size: "3px" };

Div.propTypes = {
    Font_Family: PropTypes.oneOf(["Arial", "fantasy", "monospace", "serif" ]),
    Border_Radius: PropTypes.string,
    Bagrounnd_Color: PropTypes.string,
    Border_Color: PropTypes.string,
    Width: PropTypes.string,
    Height: PropTypes.string,
    Padding: PropTypes.string,
    Font_Size: PropTypes.string
}

export default Div;