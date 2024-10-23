// middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Authorization header missing" });
    return;
  }

  const token = authHeader.split(" ")[1]; // Get token from 'Bearer <token>'

  if (!token) {
    res.status(401).json({ message: "Token missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Attach decoded token to req object
    next(); // Proceed to next middleware
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
