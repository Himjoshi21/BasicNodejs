import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";

const taskRoutes = Router();

taskRoutes.get("/",createTask)

export default taskRoutes;