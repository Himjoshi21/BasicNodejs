import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";


const router=express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    userId: req.session.userId,
    email: req.session.email
  });
});


export default router;