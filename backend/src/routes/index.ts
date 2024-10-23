import express, { Request, Response, NextFunction } from "express";
import { signup, login } from "../controllers/authController";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

// Public Routes
router.post("/signup", signup);
router.post("/login", login);

// Protect the following routes using the authMiddleware
router.use(authMiddleware);

// Task Routes (protected by authMiddleware)
router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
