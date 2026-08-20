import express from "express";
import authController from  "../controllers/auth.controllers.js";

const router=express.Router();

/**
 * Login 
 * URL: /api/auth/login
 * HTTP method: posst
 */
router.post("/login",authController.login);

/**
 * Register 
 * URL: /api/auth/register
 * HTTP method: posst
 */
router.post("/register",authController.register);

router.post("/logout", authControllers.logout);
export default router;