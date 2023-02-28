import express from "express";
import http from "http";
import { Server } from "socket.io";
import { indexHandler } from "./src/controller/index.controller.js";
import { socketProcess } from "./src/socketProcess.js";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");
app.use(express.static("public"));

const httpServer = http.createServer(app);

export const io = new Server(httpServer);

export const socketIO = io.on("connection", (socketIO) => {
  console.log("user connect");
  socketIO.on("disconnect", () => {
    console.log("user disconnected");
  });
  socketProcess(socketIO);
});

app.get("/", indexHandler);

httpServer.listen(3000, async () => {
  console.log(`http://127.0.0.1:3000 server is online`);
});
