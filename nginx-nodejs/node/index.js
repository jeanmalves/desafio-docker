const express = require('express');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

const names = require("random-names-generator");
const allNames = names.all;


app.get('/', (req, res) => {
  const randomName = names.random();

  const sql = `INSERT INTO people(name) values('${randomName}')`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Record inserted');
  });

  connection.query('SELECT name FROM people', (err, rows) => {
    if (err) throw err;

    const names = rows.map(row => row.name).join(', ');
    res.send(`<h1>Full Cycle Rocks!</h1><br /><br />
        <h2>Names: ${names}</h2>
    `);
  });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});