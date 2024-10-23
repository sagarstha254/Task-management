import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const tasks = await prisma.task.findMany({ where: { userId } });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, dueDate } = req.body;
  const userId = (req as any).user.userId;
  const task = await prisma.task.create({
    data: { title, description, dueDate, userId },
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, description, dueDate },
  });
  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ message: "Task deleted" });
};
