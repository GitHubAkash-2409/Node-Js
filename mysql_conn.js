const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

conn.connect((err) => {
  if (err) {
    console.error("Error in Connection:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

module.exports = conn;
