import React from "react";
import Table from './Table';

export default {
    title: 'Table',
    component: Table,

    argTypes: {
             User : {control: {type: 'array'}},
             Description: { control: {type: 'text'}}
            
    }

}


const Template = args => <Table  {...args} />


export const text = Template.bind({});

text.args = {

    User: [
        { firstName: 'Athesh', lastName: 'Waran', age: 20 },
        { firstName: 'Vijay', lastName: 'Shankar', age: 21 }
    ],

    Description: '',

}