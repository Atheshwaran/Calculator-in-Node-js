const { query } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    port: 3307,
    database: "studentdatas"
});

con.connect( function(err) {
    if(err) throw err;
    console.log("Connected");
})


// Reading all the datas in the databases

app.get( '/studentdatas', (req, res) => {
    
    const read = "select * from students";

    con.query(read, function(err, result){
        if(err) throw err;
        console.log(result);
        res.status(200).send(result);
    })

})


// Adding the new data to the database

app.post( '/addstudent', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const city = req.body.city;
    
    const value = [[id, name, city]];
    const data = "insert into students (Id, Name, City) values ?";
    

    con.query(data, [value], function(err, result){
        if(err) throw err;
        console.log(result);
        res.status(200).send(result);
    })

})


// Updating the particular data in the database

app.put( '/updatestudent', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const city = req.body.city;

    let update;//= "update students set ?";  
    let value;

    update =  (name ) ? "update students set Name=? where Id = ?" :  "update students set City = ? where Id = ?" ;
    value =  (name) ? name : city;
    
    con.query(update, [ value , id], function(err, result){
        if(err) throw err;
        console.log(result);
        res.status(200).send(result);
    })

})


// Deleting the particular data in the databases

app.put( '/deletestudent', (req, res) => {

    const id = req.body.id;
    
    const delet = "delete from students where id = ? ";  

    con.query(delet, [id], function(err, result){
        if(err) throw err;
        console.log(result);
        res.status(200).send(result);
    })

})



app.listen(8081, () => console.log("Server 8081 STARTED.........."));