import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/DbConnection.mjs";
import cookieParser from "cookie-parser";

//import pkgs used for the video call
import http from "http";
import { Server as SocketIoServer } from "socket.io";

//import router
import router from "./routes/router.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1081;

//assign the variable used for the video call
const server = http.createServer(app);
const io = new SocketIoServer(server, {
  cors: {
    origin: "http://localhost:5173/videocall",
    methods: ["GET", "POST"],
  },
});
//socket.io config
import { socketConfig } from "./config/socketConfig.mjs";
socketConfig(io);

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
