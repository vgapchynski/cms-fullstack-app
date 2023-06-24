import * as C from "controllers";
import * as D from "duck";
import express from "express";

const router = express.Router();

router.get("/me", async (req: D.AuthorizedRequest, res) => {
  try {
    const result = await C.UsersController.findOne(req.decodedToken._id);

    if (!result || "errors" in result) {
      res.status(404).json(result);
    } else {
      res.json(result);
    }
  } catch (e) {
    res.status(500).json({
      errors: {
        default: D.VALIDATION_MESSAGES.default,
      },
    });
  }
});

export default router;
