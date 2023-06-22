import 'dotenv/config'

import mysql from "mysql2"

export const pool  = mysql.createPool({
  host            : process.env.HOST,
  user            : process.env.USER,
  password        : process.env.PASSWORD,
  database        : process.env.DATABASE
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log("connected with Database");
});


// import mysql2 from "mysql2"

// export const db = mysql2.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "iton1218",
//    database: "blog"
// })

