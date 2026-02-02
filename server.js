import express from "express";
import dotenv from "dotenv"
import router from "./routes/route.js";
import productrouter from './routes/product.route.js'
import pool, { checkConnection } from "./config/db.js";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use('/api',router);
app.use('/api/product/',productrouter);
checkConnection();

app.listen(PORT,()=>{
    console.log(`app is listenting at port:${PORT}`);
});


