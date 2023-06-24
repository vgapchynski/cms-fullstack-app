import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AuthorizedRequest extends Request {
  decodedToken: JwtPayload;
}
