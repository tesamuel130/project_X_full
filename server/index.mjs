import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.mjs";

dotenv.config();

const app = express();
const PORT = 8081;

app.use(router);

app.listen(PORT, () => {
  console.log(`it is running on port ${PORT}`);
});
