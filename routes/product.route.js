import express from "express"
import { allproducts } from "../controllers/product.controller.js";


const router=express.Router();

router.get('/products',allproducts)

export default router