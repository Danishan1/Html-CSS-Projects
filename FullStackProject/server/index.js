import express from "express";
import { createUsersTable } from "./queries/createUsersTable.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ Name: "Danishan" });
});

createUsersTable()


app.listen(3001, () => {
  console.log("Server is  running on Port 3001");
});
