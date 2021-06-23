import React from "react";
import Button from './Button';


export default {
    title: 'Button',
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

      status: { control: {type: 'boolean'}}
      
    }
  };


// export const Primary = () => <Button variant ='primary'> Primary </Button>
// export const Secondary = () => <Button variant ='secondary'> Secondary </Button>
// export const Success = () => <Button variant ='success'> Success </Button>
// export const Reject = () => <Button variant ='reject'> Reject </Button>



const Template = args => <Button {...args} />

export const Click_button = Template.bind({});
Click_button.args = {
    variant: 'primary',
   name: "Login",  
  status : true
}


// export const Secondary = Template.bind({});
// Secondary.args = {
//    variant: 'secondary',
//    children: "secondary"
// };

