const mysql = require('mysql');

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

    
   // Creating DataBase

    con.query("create database StudentDatas", function(err, result){
        if(err) throw err;
        console.log("Database Created");
    })


    // Creating Table 

    con.query("create table students (Id int, Name varchar(20), City varchar(20))", function(err, result){
        if(err) throw err;
        console.log("Table Created");
    })
    

    // Inserting single data value to tables.

    const data = "insert into students (Id, Name, City) values (1, 'Athesh', 'Pollachi')";
    
    con.query(data, function(err, result){
        if(err) throw err;
        console.log("One data inserted into tables successfully");
    })


    // Inserting multiple data values to tables.

    const data = "insert into students (Id, Name, City) values ?";

    const datas = [
        [2, 'Babu', 'Coimbatore'],
        [3, 'Dinesh', 'Aliyar'],
        [4, 'Siva', 'Chennai'],
        [5, 'Pravu', 'Coimbatore'],
        [6, 'Ravi', 'Pollachi'],
        [7, 'Selva', 'Chennai']
    ];
    
    con.query(data, [datas], function(err, result){
        if(err) throw err;
        console.log("Multiple datas inserted into tables successfully");
    }) 


    // Reading all values in the tables

    const read = "select * from students";

    con.query(read, function(err, result){
        if(err) throw err;
        console.log(result);
    })


    // Reading all values in the tables when the data values matches the specific conditions

    const read = "select * from students where City = 'Pollachi' or City = 'Chennai'";

    con.query(read, function(err, result){
        if(err) throw err;
        console.log(result);
    })


    // Updating particular data value in the tables

    const update = "update students set Name = 'Gopal' where Id = 5";  // Updating name 'Pravu' to 'Gopal' of Id = 5.

    con.query(update, function(err, result){
        if(err) throw err;
        console.log(result);
    })

    
    // Deleting particular data value in the tables

    const delet = "delete from students where Name = 'Selva'";  // Deleting data values of 'Selva' in the table.

    con.query(delet, function(err, result){
        if(err) throw err;
        console.log(result);
    })

})