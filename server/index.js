const express = require('express')
const app = express()
const mysql = require("mysql");
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "sys"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Productions";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on 3001");
});