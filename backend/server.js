import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import connectDB from "./src/config/db.js";
import adminRoutes from "./src/routes/admin.route.js"
import userRoutes from "./src/routes/user.route.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/admin",adminRoutes);
app.use("/user",userRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is listening to the PORT : ",PORT);
  });
});
