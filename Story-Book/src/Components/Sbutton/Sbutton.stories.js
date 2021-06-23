import React from "react";
import Button from './Sbutton';


export default {

  title: 'SButton',
  component: Button,

  argTypes: {
    
    variant: {
      options: ['primary', 'secondary', 'success', 'reject'],
      control: { type: 'radio' }
    },

    name: {
      options: ['Login', 'Logout', 'Register'],
      control: 'select'
    },

    status: { control: {type: 'boolean'} }
  }
};


const Template = args => <Button  {...args} />

export const Click_button = Template.bind({});
Click_button.args = {
  variant: 'primary',
  name: 'Login',
  status: false
};




