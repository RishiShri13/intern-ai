import { Router } from "express";
import { registerCompany } from "./auth.controller";

const router = Router();

router.post("/register-company", registerCompany);

export default router;