import mysql from "mysql"

export const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "iton1218",
   database: "blog"
})