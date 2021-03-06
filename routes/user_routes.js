import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: "Too many requests from this IP, please try again after 15 minutes",
});

import { register, getUserByID, updateUser } from "../controllers/user_controller.js";


import authenticateUser from "../middleware/auth.js";

router.route("/register").post(apiLimiter, register);
router.route("/getUserByID").post(apiLimiter, getUserByID);
router.route("/updateUser").post(apiLimiter, updateUser);


export default router;