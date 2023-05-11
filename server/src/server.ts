import cors from "cors";
import "dotenv/config";
import express from "express";

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
  });
};

startServer();
