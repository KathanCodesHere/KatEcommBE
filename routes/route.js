import express from "express"
import { health } from "../controllers/route.controller.js";
const router=express.Router();

router.get('/',health)

export default router