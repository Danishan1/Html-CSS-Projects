import express from "express";
import { executeTables } from "./queries/executeTables.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ Name: "Danishan" });
});


executeTables();


app.listen(3001, () => {
  console.log("Server is  running on Port 3001");
});
