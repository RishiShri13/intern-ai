<<<<<<< HEAD
import { Router } from "express";
import { registerCompany } from "./auth.controller";
=======
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
>>>>>>> origin/main

const router = Router();

router.post("/register-company", registerCompany);

<<<<<<< HEAD
export default router;
=======
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InternAI Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);

export default app;
>>>>>>> origin/main
