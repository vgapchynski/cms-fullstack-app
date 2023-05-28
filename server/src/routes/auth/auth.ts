import { UsersController } from "controllers";
import express from "express";

const router = express.Router();

router
  .post("/sign-up", async (req, res) => {
    const result = await UsersController.signUp(req.body);

    if ("errors" in result) {
      if (result.errors.unique) {
        res.status(409);
      } else {
        res.status(422);
      }
    }

    res.json(result);
  })
  .post("/sign-in", async (req, res) => {
    const result = await UsersController.signIn(req.body);

    res.json(result);
  });

export default router;
