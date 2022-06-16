import bodyParser from "body-parser";

import cloudinary from "cloudinary";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import config from "./config/config";
cloudinary.v2.config({
  cloud_name: "djds3cupn",
  api_key: "176514316239629",
  api_secret: "UfunOAi2w6rUqnCN77FSUQx_h2w",
});
const port = config.PORT;

// connect DB
mongoose.connect(config.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

import dotenv from "dotenv";

dotenv.config();

const server = express();

// Connect to database
mongoose
  .connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log("Connected to database successfully. Hell Yeah !!"))
  .catch((err) => console.error(err));

// configure middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// configure routes
import taskRoute from "./routes/task.route";
server.use("/api/task", taskRoute);

import projectRoute from "./routes/project.route";
server.use("/api/project", projectRoute);

import memberRoute from "./routes/member.route";
server.use("/api/member", memberRoute);

// config for angular server
server.use(express.static("fe"));

// server start
server.listen(process.env.SERVER_LISTEN_PORT, () => {
  console.log(`${process.env.SERVER_LISTEN_PORT}!`);
});
