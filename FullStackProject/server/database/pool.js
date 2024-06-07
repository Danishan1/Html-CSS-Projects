import mysql from "mysql2";
import configDB from "./configDB.js";

const pool = mysql.createPool({
  ...configDB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on("connection", (con) => {
  console.log("New connection added to the pool:", con.threadId);
});
pool.on("release", (con) => {
  console.log("Connection released to the pool:", con.threadId);
});
export default pool.promise();
