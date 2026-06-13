import express from "express";
import dotenv from "dotenv"

import connectDB from "./src/config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is listening to the PORT : ",PORT);
  });
});
