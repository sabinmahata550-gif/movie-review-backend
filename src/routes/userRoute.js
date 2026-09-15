import express from "express";
import { register, login, profile, update } from "../controller/userController.js";
import auth from "../middleware/auth.js";
import validate from "../middleware/validator.js";
import { loginSchema, registerSchema } from "../libs/schema/authschema.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/profile", auth, profile);
router.put("/profile", auth, update);
export default router;