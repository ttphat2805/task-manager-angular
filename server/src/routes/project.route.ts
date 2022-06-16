import express from "express";
import * as projectController from "../controllers/projectController";
const router = express.Router();

router.get("/", projectController.getProject);
router.post("/addproject", projectController.addProject);
router.get("/getOneProject/:id", projectController.getOneProject);
router.patch("/updateProject/:id", projectController.updateProject);
router.delete("/delete/:id", projectController.deleteProject);

export default router;
