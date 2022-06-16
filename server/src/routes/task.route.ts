import express from "express";
import * as taskController from "../controllers/taskController";

const router = express.Router();

router.get("/", taskController.getTask);
router.post("/addtask", taskController.addTask);
router.get("/getOneTask/:id", taskController.getOneTask);
router.patch("/updateTask/:id", taskController.updateTask);
router.delete("/delete/:id", taskController.deleteTask);

export default router;
