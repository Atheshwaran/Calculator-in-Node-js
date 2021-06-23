import React from 'react'
import Hooks from './Hooks'


export default {

    title: "Hooks",
    component: Hooks,

    argTypes: {

        Value1: { control: { type: 'number' } },
        Value2: { control: { type: 'number' } },
        Delay: { control: { type: 'number' } }
    }

}


const Template = args => <Hooks {...args} />

export const Count_Value = Template.bind({})

Count_Value.args = {
    Value1: 1,
    Value2: 2,
    Delay: 90000000
}

