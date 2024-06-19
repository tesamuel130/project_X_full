import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//import router
import router from "./routes/router.mjs";

dotenv.config();

const app = express();
const PORT = 8081;

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`database connected`))
  .catch((err) => console.log("databse is not connected", err));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`it is running on port ${PORT}`);
});
