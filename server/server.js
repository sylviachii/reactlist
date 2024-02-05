const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();



// 启用所有来源的CORS
app.use(cors());



const connection = mysql.createConnection({
    host: '151.106.97.204',
    user: 'u542437981_test',
    password: '1234567Qaz*',
    database: 'u542437981_test',
    connectionLimit: 300, // 設置連接池大小
});

const connection2 = mysql.createConnection({
    host: '151.106.97.204',
    user: 'u542437981_test',
    password: '1234567Qaz*',
    database: 'u542437981_test',
    connectionLimit: 300, // 設置連接池大小
});

const connection3 = mysql.createConnection({
    host: '151.106.97.204',
    user: 'u542437981_test',
    password: '1234567Qaz*',
    database: 'u542437981_test',
    connectionLimit: 10, // 設置連接池大小
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!!!!!!!!!!');
});

connection2.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!!!!!!!!!!');
});
// Define your routes and handle database queries here

connection3.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!!!!!!!!!!');
});
// Define your routes and handle database queries here


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.get('/', (req, res) => {
            return res.json('from sever side');
    });

    app.get('/api/data3', (req, res) => {
        connection3.query('SELECT * FROM `chiweiorder` ORDER BY `orderlist`.`id` DESC', (error, results) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.json(results);
            }
        });
});
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM chiweiproduct', (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.json(results);
        }
    });



    app.get('/api/data2/:id', (req, res) => {
        const { id } = req.params;
      
        if (!id) {
          res.status(400).send('ID參數缺失');
          return;
        }
      
        const query = 'SELECT * FROM chiweiorder WHERE id = ?';
        connection2.query(query, [id], (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
          } else {
            res.json(results);
          }
        });
      });
      
      
});



