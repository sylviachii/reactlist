const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: '151.106.97.232',
    user: 'u542437981_test',
    password: '1234567Qaz*',
    database: 'u542437981_test',
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});
// Define your routes and handle database queries here

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});




app.get("/u542437981_test", (req, res) => {
    db.query("SELECT * FROM chiweiorder", (err, result) => {
        if (err) {
            console.error("Error fetching employee data:", err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Employee data fetched successfully:", result);
            res.send(result);
        }
    });
});