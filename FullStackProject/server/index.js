import express from "express";
import dotenv from "dotenv";
// import { executeTables } from "./queries/executeTables.js";

dotenv.config() // for loading .env variables properly
const app = express();

app.get("/", (req, res) => {
  res.json({ Name: "Danishan" });
});


// executeTables();

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is  running on Port ${PORT}`);
});
