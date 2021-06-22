import React from "react";
import Table from './Table';

export default {
    title: 'Table',
    component: Table,

    // argTypes: {
    //          User : [],
            
    // }

}


// export const Primary = () => <Table variant ='primary'> Check </Table>
// export const DataPresent = () => <Table variant ='datapresent'> Data Present </Table>
// export const NoData = () => <Table variant ='nodata'> No Data </Table>


const Template = args => <Table  {...args} />


export const text = Template.bind({});

text.args = {

    User: [
        { firstName: 'Athesh', lastName: 'Waran', age: 20 },
        { firstName: 'Vijay', lastName: 'Shankar', age: 21 }
    ],

    Description: '',

}