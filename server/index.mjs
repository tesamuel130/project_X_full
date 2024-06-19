import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`it is running on port ${PORT}`);
});
