const mysql = require("mysql2");

exports.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "candidates",
    password: "password"
}).promise();
