import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getAllTasks } from "../controllers/task.controller.js";
const taskRoutes = Router();

taskRoutes.get("/",authMiddleware,createTask)
taskRoutes.get("/",authMiddleware,getAllTasks)
export default taskRoutes;