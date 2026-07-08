import { Router } from "express";
<<<<<<< HEAD
import { registerCompany } from "./auth.controller";

const router = Router();

router.post("/register-company", registerCompany);
=======
import {
  register,
  login,
  getProfile,
} from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, getProfile);
>>>>>>> origin/main

export default router;