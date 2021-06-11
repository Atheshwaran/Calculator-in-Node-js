import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8084";  // Backend basic API link.

export default async function  wicketA(payload) {

    console.log("Passing Axios data to backend for Wicket - A   =  ", payload);
    console.log("Axios POST for Wicket - A called ........");

    const res = await axios.post("/addwicket",  { wicket: payload}, {  // Passing request to backend api for getting upadated value.

        headers: {'Cache-Control': 'no-cache',
        Accept: 'application/json',
        charset: 'UTF-8',
        'Content-Type': 'application/json'}
    })
 
    console.log("Got Axios data from Backend for Wicket - A : " ,res.data); 

    return res.data;   // Updated value.

}
