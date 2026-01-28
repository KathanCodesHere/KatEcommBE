import express from "express";
import dotenv from "dotenv"
import router from "./routes/route.js";

dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`app is listenting at port:${PORT}`);
});

