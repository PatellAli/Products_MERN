import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from './config/db.js';
import productsRoute from './routes/product.route.js'


dotenv.config()
const app = express()
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use("/api/products", productsRoute)


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at: ", PORT);
})

// KDQghIdqDtapevWS