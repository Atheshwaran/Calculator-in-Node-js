import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8084";  // Backend basic API link

export default async function getResult({payload}) {

    console.log("Passing Axios datas to backend for finding Winner   =  ", payload);
    console.log("Axios POST for Result called........");

    const res = await axios.post("/result", { scoreA: payload.scorea, scoreB: payload.scoreb }, {   // Passing request to backend api for getting upadated value.

        headers: {
            'Cache-Control': 'no-cache',
            Accept: 'application/json',
            charset: 'UTF-8',
            'Content-Type': 'application/json'
        }
    })

    console.log("Got Axios data from Backend for winner result : ", res.data); 

    return res.data;  // Updated value.

}
