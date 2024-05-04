import express from "express";
import logger from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

const PORT = 8080;

app.use(cors());
app.use(logger("dev"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🔥`);
app.listen(8080, handleListening);
