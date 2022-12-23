const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const http = require("http");
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const PORT = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let history = [];

const io = new Server(httpServer);
io.on("connection", (ws) => {
  console.log("jhjgjhgjg")
  ws.emit("history", history);
  ws.on("msg", (message) => {
    history.push(message);
    io.emit("msg", message);
  });
});

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
});

httpServer.listen(PORT, async () => {
  await connect();
  console.log(`Server listening on http://localhost:${PORT}`);
});
