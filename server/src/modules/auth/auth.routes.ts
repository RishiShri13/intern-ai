import { Router } from "express";

import {
  registerCompany,
  login,
} from "./auth.controller";

const router = Router();

router.post("/register-company", registerCompany);

router.post("/login", login);

export default router;