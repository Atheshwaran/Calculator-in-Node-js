import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8084";  // Backend basic API link.

export default async function ballsB(payload) {

   console.log("Passing Axios data to backend for Balls - B   =  ", payload);
    console.log("Axios POST for Balls - B called........");

    const res = await axios.post("/addball", { ball: payload }, {    // Passing request to backend api for getting upadated value.

        headers: {
            'Cache-Control': 'no-cache',
            Accept: 'application/json',
            charset: 'UTF-8',
            'Content-Type': 'application/json'
        }
    })

    console.log("Got Axios data from Backend for Balls - B : ", res.data);  

    return res.data;    // Updated value.

}
