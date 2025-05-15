import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config()
const app = express()

app.get("/products", (req, res)=>{
    res.send("SERVER IS READY")
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at 5000 hello");
})

// KDQghIdqDtapevWS