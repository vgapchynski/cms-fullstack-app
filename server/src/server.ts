import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import * as R from "routes";

mongoose
  .connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
  .then(() => console.log("mongoose is connected"))
  .catch(() => console.log("mongoose is not connected"));

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(R.AuthRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
  });
};

startServer();
