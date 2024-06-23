import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./models/DbConnection.mjs";
import cookieParser from "cookie-parser";

//import router
import router from "./routes/router.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

//database connection
dbConnection();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`it is running on port ${PORT}`);
});
