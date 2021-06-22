import React from 'react';
import Div from './Div';

export default {
    title: 'Div',
    component: Div,

    argTypes: {

        Border_Color: "",
        Border_Radius: "",
        Bagrounnd_Color: "",

        Font_Family: {
            options: ["Arial", "fantasy", "monospace", "serif"],
            control: { type: 'radio' }
        },

        Font_Size: "",
        Width: "",
        Height: "",
        Padding: "",

    }

}


const Template = args => <Div {...args} />

export const DivStyles = Template.bind({});
DivStyles.args = {
    Border_Radius: "10px",
    Bagrounnd_Color: "#0febff",
    Width: "1000px",
    Height: "",
    Padding: "5px",
    Border_Color: "",
    Font_Family: "",
    Font_Size: ""
}


