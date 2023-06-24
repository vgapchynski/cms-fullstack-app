import { NextFunction, Request, Response } from "express";
import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  try {
    if (!token) {
      throw new Error();
    }

    (req as Request & { decodedToken: string | JwtPayload }).decodedToken =
      jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);

    next();
  } catch {
    return res.status(401).send();
  }
};

export default validateToken;
