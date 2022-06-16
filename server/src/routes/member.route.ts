import express from "express";
import * as memberController from "../controllers/memberController";
import jwtMiddleware from "../middlewares/jwt.middleware";

const router = express.Router();

router.post("/addmember", memberController.addMember);
router.get("/getOneMember/:id", memberController.getOneMember);
router.get("/", memberController.getMember);
router.post("/login", memberController.login);
router.post("/register", memberController.register);
router.patch("/updatemember/:id", memberController.updateMember);
router.delete("/delete/:id", memberController.deleteMember);
router.get("/currentUser", jwtMiddleware, memberController.currentUser);

export default router;
