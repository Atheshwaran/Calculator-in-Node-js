import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input
}

// export const Text = () => <Input type = 'text' />
// export const Password = () => <Input type = 'password' />


const Template = args => <Input {...args} />

export const  Text = Template.bind({});
Text.args = {
    type: "text"
}

export const  Password = Template.bind({});
Password.args = {
    type: "password"
}
