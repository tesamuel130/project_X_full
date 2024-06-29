import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./DbConnection.mjs";
import cookieParser from "cookie-parser";

//import router
import router from "./routes/router.mjs";
import { homeSearch } from "./controllers/homeSearchControllers.mjs";
import { users } from "./tryusers.js";

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

//try api
app.get("/tryuser", homeSearch);

app.listen(PORT, () => {
  console.log(`it is running on port ${PORT}`);
});
